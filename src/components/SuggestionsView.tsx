'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Lightbulb, Share2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function SuggestionsView() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const suggestionsJSON = searchParams.get('suggestions');
    
    let suggestions: string[] = [];
    if (suggestionsJSON) {
        try {
            suggestions = JSON.parse(suggestionsJSON);
        } catch (e) {
            console.error("Failed to parse suggestions:", e);
        }
    }

    if (!suggestions || suggestions.length === 0) {
        return (
            <div className="container py-12 md:py-24 text-center">
                 <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">No suggestions found.</h1>
                 <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto mt-4">
                    Something went wrong, or you came here directly. Please start a new check-in to get personalized suggestions.
                 </p>
                 <Button asChild className="mt-6">
                    <Link href="/check-in">Start a New Check-in</Link>
                 </Button>
            </div>
        )
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center space-y-4 text-center">
                <Lightbulb className="w-12 h-12 text-primary"/>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Your Personalized Micro-Suggestions</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Here are a few small, actionable steps you can take right now. Remember to be kind to yourself.
                </p>
            </div>
            <div className="max-w-2xl mx-auto mt-10 space-y-4">
                {suggestions.map((suggestion, index) => (
                    <Card key={index} className="bg-accent/20">
                        <CardContent className="p-6 flex items-start space-x-4">
                           <CheckCircle className="w-6 h-6 text-teal-500 mt-1 shrink-0" />
                           <p className="text-foreground">{suggestion}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-2xl mx-auto mt-12">
                 <Button asChild size="lg" className="w-full md:w-auto">
                    <Link href="/check-in">Start a New Check-in</Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
                    <Link href="/reflections">
                        <Share2 className="mr-2 h-4 w-4" />
                        Go to Reflection Wall
                    </Link>
                 </Button>
            </div>
        </div>
    );
}
