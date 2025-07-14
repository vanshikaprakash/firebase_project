
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, Heart, Users, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const moods = [
  { emoji: '😌', text: 'Calm' },
  { emoji: '😊', text: 'Happy' },
  { emoji: '😢', text: 'Sad' },
  { emoji: '😠', text: 'Angry' },
  { emoji: '😴', text: 'Tired' },
  { emoji: '🧘', text: 'Reflecting' },
];

const calmResources = [
    {
        emoji: '📘',
        title: 'The Power of Now',
        description: 'A guide to spiritual enlightenment and living in the present moment.',
        url: 'https://www.goodreads.com/book/show/6708.The_Power_of_Now'
    },
    {
        emoji: '🎵',
        title: 'Peaceful Piano',
        description: 'A popular Spotify playlist for calm, focus, and relaxation.',
        url: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO'
    },
    {
        emoji: '▶️',
        title: 'Deep Focus Music',
        description: 'A YouTube stream with ambient music to help you concentrate.',
        url: 'https://www.youtube.com/watch?v=2FtcZKqUMFQ'
    },
    {
        emoji: '🧘‍♀️',
        title: '10-Min Mindfulness',
        description: 'A guided meditation video from Calm for finding your center.',
        url: 'https://www.youtube.com/watch?v=inpok4MKVLM'
    },
    {
        emoji: '📓',
        title: 'Reflectly App',
        description: 'An AI-powered journaling app to help you structure your thoughts.',
        url: 'https://reflectly.app'
    },
    {
        emoji: '⏰',
        title: 'Lofi Pomodoro Timer',
        description: 'A study timer with lofi music to boost productivity and focus.',
        url: 'https://www.youtube.com/watch?v=wGgbo-QtL58'
    }
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
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-24 lg:py-28 bg-secondary/30">
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

        <section id="how-it-works" className="w-full py-20 md:py-24 lg:py-32">
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

        <section id="calm-corner" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Calm Corner</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A peaceful space to discover resources for your mind, mood, and motivation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {calmResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 h-full flex flex-col bg-background dark:bg-muted shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="text-3xl mb-3">{resource.emoji}</div>
                    <h3 className="font-bold mb-2 text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{resource.description}</p>
                  </Card>
                </a>
              ))}
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
                                <CardTitle>Community Forum</CardTitle>
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
       <Button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110',
          'z-50',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        variant="default"
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
