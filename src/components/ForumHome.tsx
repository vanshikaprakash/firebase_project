
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { forumThreads, type ForumThread, type Reply } from '@/lib/forum-data';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MessageSquarePlus, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const threadSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.').max(100, 'Title must be under 100 characters.'),
  body: z.string().min(10, 'Body must be at least 10 characters.').max(1000, 'Body must be under 1000 characters.'),
});

type ThreadFormValues = z.infer<typeof threadSchema>;

// Simple keyword flagging list
const flaggedKeywords = ['suicide', 'self-harm', 'kill', 'abuse', 'assault'];

export default function ForumHome() {
    const [threads, setThreads] = useState<ForumThread[]>(forumThreads);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<ThreadFormValues>({
        resolver: zodResolver(threadSchema),
        defaultValues: { title: '', body: '' },
    });

    function checkForFlaggedKeywords(text: string): boolean {
        const lowerCaseText = text.toLowerCase();
        return flaggedKeywords.some(keyword => lowerCaseText.includes(keyword));
    }

    function onSubmit(values: ThreadFormValues) {
        if (checkForFlaggedKeywords(values.title) || checkForFlaggedKeywords(values.body)) {
            toast({
                variant: 'destructive',
                title: 'Content Warning',
                description: "Your message appears to contain sensitive content. If you are in crisis, please seek immediate help. This post will not be published.",
            });
            return;
        }

        const newThread: ForumThread = {
            id: `thread-${threads.length + 1}`,
            title: values.title,
            body: values.body,
            author: `Student ${String.fromCharCode(65 + threads.length)}`, // Student A, B, C...
            timestamp: 'Just now',
            replies: [],
        };
        setThreads(prev => [newThread, ...prev]);
        form.reset();
        setIsDialogOpen(false);
        toast({ title: 'Success!', description: 'Your discussion has been posted.' });
        router.push(`/forum/${newThread.id}`);
    }

    return (
        <div>
            <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Community Forum</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Share experiences, ask questions, and find support. You are not alone.
                </p>
            </div>
            
            <Alert className="my-8 bg-primary/10 border-primary/20 max-w-3xl mx-auto">
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
                            Start a New Discussion
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>New Discussion</DialogTitle>
                            <DialogDescription>
                                Share what's on your mind. All posts are anonymous.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g., How do you deal with exam anxiety?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="body"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Thoughts</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Share more details here..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Post Discussion</Button>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
                {threads.map(thread => (
                     <Card key={thread.id} className="hover:bg-muted/50 transition-colors">
                        <Link href={`/forum/${thread.id}`} className="block">
                            <CardHeader>
                                <CardTitle className="text-lg">{thread.title}</CardTitle>
                            </CardHeader>
                             <CardFooter className="text-sm text-muted-foreground flex items-center justify-between">
                                <span>By {thread.author} &middot; {thread.timestamp}</span>
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{thread.replies.length} replies</span>
                                </div>
                            </CardFooter>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
