
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Lightbulb, Share2, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

type SuggestionsResponse = {
    acknowledgment: string;
    emotionalInsight: string;
    personalizedSuggestions: string[];
    encouragement: string;
}

export default function SuggestionsView() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const suggestionsJSON = searchParams.get('suggestions');
    
    let response: SuggestionsResponse | null = null;
    if (suggestionsJSON) {
        try {
            response = JSON.parse(suggestionsJSON);
        } catch (e) {
            console.error("Failed to parse suggestions:", e);
        }
    }

    if (!response || !response.personalizedSuggestions || response.personalizedSuggestions.length === 0) {
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

    const { acknowledgment, emotionalInsight, personalizedSuggestions, encouragement } = response;

    return (
        <div className="container py-12 md:py-24">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <Sparkles className="w-12 h-12 text-primary"/>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Moment for You</h1>
                </div>
                
                <Card className="bg-background/50 border-border/50 shadow-sm">
                    <CardContent className="p-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">{acknowledgment}</p>
                    </CardContent>
                </Card>

                <Card className="bg-background/50 border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <Lightbulb className="w-6 h-6 text-primary" />
                            A Gentle Insight
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">{emotionalInsight}</p>
                    </CardContent>
                </Card>

                <div>
                    <h3 className="text-xl font-bold text-center mb-4 font-headline">Here are a few small steps you could take:</h3>
                    <div className="space-y-4">
                        {personalizedSuggestions.map((suggestion, index) => (
                            <Card key={index} className="bg-accent/30 border-accent/50">
                                <CardContent className="p-6 flex items-start space-x-4">
                                <CheckCircle className="w-6 h-6 text-accent-foreground mt-1 shrink-0" />
                                <p className="text-foreground">{suggestion}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-lg text-muted-foreground italic">"{encouragement}"</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-8">
                    <Button asChild size="lg" className="w-full md:w-auto">
                        <Link href="/check-in">Start a New Check-in</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
                        <Link href="/community">
                            <Share2 className="mr-2 h-4 w-4" />
                            Go to Community
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
