
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { forumThreads, type ForumThread, type Reply } from '@/lib/forum-data';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const replySchema = z.object({
  body: z.string().min(2, 'Reply must be at least 2 characters.').max(500, 'Reply must be under 500 characters.'),
});

type ReplyFormValues = z.infer<typeof replySchema>;

// Simple keyword flagging list
const flaggedKeywords = ['suicide', 'self-harm', 'kill', 'abuse', 'assault'];

export default function ThreadView({ threadId }: { threadId: string }) {
    const [thread, setThread] = useState<ForumThread | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        const foundThread = forumThreads.find(t => t.id === threadId);
        // In a real app, you'd fetch from a DB here.
        setThread(foundThread || null);
    }, [threadId]);

    const form = useForm<ReplyFormValues>({
        resolver: zodResolver(replySchema),
        defaultValues: { body: '' },
    });
    
    function checkForFlaggedKeywords(text: string): boolean {
        const lowerCaseText = text.toLowerCase();
        return flaggedKeywords.some(keyword => lowerCaseText.includes(keyword));
    }

    function onSubmit(values: ReplyFormValues) {
        if (!thread) return;

        if (checkForFlaggedKeywords(values.body)) {
            toast({
                variant: 'destructive',
                title: 'Content Warning',
                description: "Your reply appears to contain sensitive content. For safety, it will not be published.",
            });
            return;
        }

        const newReply: Reply = {
            id: `reply-${thread.replies.length + 1}`,
            author: `Student ${String.fromCharCode(65 + thread.replies.length + 5)}`, // Some offset for variety
            timestamp: 'Just now',
            body: values.body,
        };

        const updatedThread = { ...thread, replies: [...thread.replies, newReply] };
        setThread(updatedThread);
        
        // Here you would typically update the DB. For this mock version, we just update state.
        const threadIndex = forumThreads.findIndex(t => t.id === threadId);
        if(threadIndex !== -1) {
            forumThreads[threadIndex] = updatedThread;
        }

        form.reset();
        toast({ title: 'Success!', description: 'Your reply has been posted.' });
    }

    if (!thread) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold">Thread not found</h2>
                <p className="text-muted-foreground">This discussion may have been moved or deleted.</p>
                <Button asChild variant="link" className="mt-4">
                    <Link href="/community">
                        <ArrowLeft className="mr-2" />
                        Back to Community
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                 <Button asChild variant="outline" size="sm" className="mb-4">
                    <Link href="/community">
                        <ArrowLeft className="mr-2" />
                        Back to All Discussions
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">{thread.title}</h1>
                <p className="text-sm text-muted-foreground mt-2">
                    Posted by {thread.author} &middot; {thread.timestamp}
                </p>
                 <p className="mt-4 text-foreground/90 whitespace-pre-wrap">{thread.body}</p>
            </div>

            <Separator />

            <div id="replies" className="space-y-6">
                <h2 className="text-2xl font-bold font-headline">Replies ({thread.replies.length})</h2>
                {thread.replies.length > 0 ? (
                    thread.replies.map(reply => (
                         <Card key={reply.id} className="bg-background/50 shadow-sm">
                            <CardContent className="p-4">
                               <p className="text-sm text-foreground/90">{reply.body}</p>
                               <p className="text-xs text-muted-foreground mt-2">
                                   {reply.author} &middot; {reply.timestamp}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-muted-foreground">Be the first to reply.</p>
                )}
            </div>

             <Separator />
            
            <div>
                <h3 className="text-xl font-bold font-headline mb-4">Add Your Reply</h3>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="body"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea placeholder="Share your thoughts or offer support..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button type="submit">Post Reply</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
