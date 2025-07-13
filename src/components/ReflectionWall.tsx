'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { mockReflections, type Reflection } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { MessageSquarePlus, Heart, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const reflectionSchema = z.object({
  text: z.string().min(10, 'Reflection must be at least 10 characters.').max(500, 'Reflection must be under 500 characters.'),
  isAnonymous: z.boolean().default(true),
});

type ReflectionFormValues = z.infer<typeof reflectionSchema>;

// Simple keyword flagging list. In a real app, this would be more robust and managed on a server.
const flaggedKeywords = ['suicide', 'self-harm', 'kill', 'abuse', 'assault'];

function ReflectionCard({ reflection, onReact }: { reflection: Reflection, onReact: (id: number, reaction: 'feelThis' | 'notAlone') => void }) {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle className="text-base">{reflection.emotion}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-foreground">{reflection.text}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
                <div>
                  <p>{reflection.isAnonymous ? "Anonymous" : reflection.author} &middot; {reflection.timestamp}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => onReact(reflection.id, 'feelThis')}>
                        <Heart className="w-4 h-4 text-blue-400" />
                        <span>{reflection.reactions.feelThis}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => onReact(reflection.id, 'notAlone')}>
                        <Users className="w-4 h-4 text-green-400" />
                        <span>{reflection.reactions.notAlone}</span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default function ReflectionWall() {
    const [reflections, setReflections] = useState<Reflection[]>(mockReflections);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    const form = useForm<ReflectionFormValues>({
        resolver: zodResolver(reflectionSchema),
        defaultValues: {
            text: '',
            isAnonymous: true,
        },
    });

    function handleReact(id: number, reaction: 'feelThis' | 'notAlone') {
      setReflections(prev =>
        prev.map(r => 
          r.id === id ? { ...r, reactions: { ...r.reactions, [reaction]: r.reactions[reaction] + 1 } } : r
        )
      );
    }
    
    function checkForFlaggedKeywords(text: string): boolean {
        const lowerCaseText = text.toLowerCase();
        return flaggedKeywords.some(keyword => lowerCaseText.includes(keyword));
    }

    function onSubmit(values: ReflectionFormValues) {
        if (checkForFlaggedKeywords(values.text)) {
            toast({
                variant: 'destructive',
                title: 'Content Warning',
                description: "Your message appears to contain sensitive content. If you are in crisis, please seek immediate help. This post will not be published.",
            });
            return;
        }

        const newReflection: Reflection = {
            id: reflections.length + 1,
            author: 'You',
            emotion: 'Reflection',
            text: values.text,
            isAnonymous: values.isAnonymous,
            timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            reactions: { feelThis: 0, notAlone: 0 },
        };
        setReflections(prev => [newReflection, ...prev]);
        form.reset();
        setIsDialogOpen(false);
        toast({ title: 'Success!', description: 'Your reflection has been shared.' });
    }

    return (
        <div className="mt-12">
            <Alert className="mb-8 bg-primary/10 border-primary/20">
                <AlertTitle className="font-headline">A Note on Community Safety</AlertTitle>
                <AlertDescription>
                   This is a space for sharing and support. For your safety and the safety of others, posts containing sensitive content may be flagged and not published. If you need immediate support, please contact a crisis hotline or mental health professional.
                </AlertDescription>
            </Alert>
            <div className="text-center mb-8">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            <MessageSquarePlus className="mr-2 h-4 w-4" />
                            Add Your Reflection
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Share Your Thoughts</DialogTitle>
                            <DialogDescription>
                                Your voice matters. Share your experience with the community.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="text"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Reflection</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Share what's on your mind..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="isAnonymous"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <FormLabel>Post anonymously</FormLabel>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Share Reflection</Button>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {reflections.map(reflection => (
                    <ReflectionCard key={reflection.id} reflection={reflection} onReact={handleReact} />
                ))}
            </div>
        </div>
    );
}
