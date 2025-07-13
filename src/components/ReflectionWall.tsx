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
import { MessageSquarePlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const reflectionSchema = z.object({
  text: z.string().min(10, 'Reflection must be at least 10 characters.').max(500, 'Reflection must be under 500 characters.'),
  isAnonymous: z.boolean().default(true),
});

type ReflectionFormValues = z.infer<typeof reflectionSchema>;

function ReflectionCard({ reflection }: { reflection: Reflection }) {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle className="text-base">{reflection.emotion}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-foreground">{reflection.text}</p>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
                <p>{reflection.isAnonymous ? "Anonymous" : reflection.author} &middot; {reflection.timestamp}</p>
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

    function onSubmit(values: ReflectionFormValues) {
        const newReflection: Reflection = {
            id: reflections.length + 1,
            author: 'You',
            emotion: 'Reflection',
            text: values.text,
            isAnonymous: values.isAnonymous,
            timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        };
        setReflections(prev => [newReflection, ...prev]);
        form.reset();
        setIsDialogOpen(false);
        toast({ title: 'Success!', description: 'Your reflection has been shared.' });
    }

    return (
        <div className="mt-12">
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
                    <ReflectionCard key={reflection.id} reflection={reflection} />
                ))}
            </div>
        </div>
    );
}
