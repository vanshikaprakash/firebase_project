
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, Heart, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const moods = [
  { emoji: '😌', text: 'Calm' },
  { emoji: '😊', text: 'Happy' },
  { emoji: '😢', text: 'Sad' },
  { emoji: '😠', text: 'Angry' },
  { emoji: '😴', text: 'Tired' },
  { emoji: '🧘', text: 'Reflecting' },
];

const AnimatedEmoji = () => {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
    }, 2000); // Change emoji every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentMood = moods[currentMoodIndex];

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-64 bg-secondary/30 rounded-xl p-8">
      <div className="text-6xl sm:text-7xl md:text-8xl transition-transform duration-500 ease-in-out transform scale-100 hover:scale-110">
        {currentMood.emoji}
      </div>
      <p className="mt-4 text-lg font-medium text-muted-foreground">{currentMood.text}</p>
    </div>
  );
};


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-14 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Turn your thoughts into steps.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    MindBloom is a safe space for college students to understand their emotions and find small, actionable steps towards mental well-being.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                  <Link href="/check-in">
                    Start Your Check-in
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto flex items-center justify-center p-8">
                 <AnimatedEmoji />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full pt-20 md:pt-24 lg:pt-32 pb-20 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple, gentle path to feeling better.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none bg-secondary/30">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline">1. Check-in</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Share how you're feeling. Our simple flow makes it easy to identify and articulate your emotions.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none bg-secondary/30">
                <CardHeader>
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                    <BrainCircuit className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline">2. Get Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Receive personalized, AI-powered micro-suggestions to help you navigate your feelings.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none bg-secondary/30">
                <CardHeader>
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline">3. Reflect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Optionally, share your experience anonymously with the community and find connection.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-20 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
                 <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">A Gentle Approach to Mental Wellness</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Designed with empathy to provide a warm and non-judgmental experience, right when you need it.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6">
                    <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                <Heart className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                               <CardTitle>Emotion Check-in</CardTitle>
                                <CardDescription>A simple, guided process to understand your feelings.</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                     <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                <BrainCircuit className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                               <CardTitle>AI-Powered Suggestions</CardTitle>
                               <CardDescription>Personalized, actionable steps from Gemini AI.</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                <Users className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <CardTitle>Community</CardTitle>
                                <CardDescription>Share and connect with others, anonymously.</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
