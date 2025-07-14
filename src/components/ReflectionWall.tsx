
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
import Link from 'next/link';

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
                        <Heart className="w-4 h-4 text-primary" />
                        <span>{reflection.reactions.feelThis}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => onReact(reflection.id, 'notAlone')}>
                        <Users className="w-4 h-4 text-accent-foreground" />
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
            <Alert variant="destructive" className="mb-8">
                 <AlertTitle className="font-headline">The Community Wall is now the Community!</AlertTitle>
                <AlertDescription>
                   To better support discussions, this page is being replaced by our new <Link href="/community" className="font-bold underline">Community</Link>. Please head there to share and connect!
                </AlertDescription>
            </Alert>
        </div>
    );
}
