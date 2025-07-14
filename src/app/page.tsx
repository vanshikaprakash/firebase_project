
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, Heart, Users, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const HeroIllustration = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#D1C4E9" d="M38.1,-49.9C51.5,-42.2,65.9,-32.8,73.4,-19.1C80.9,-5.4,81.5,12.5,74.5,26.4C67.5,40.3,52.9,50.2,38.1,56.9C23.3,63.6,8.2,67.1,-5.9,65.8C-20,64.5,-40.1,58.4,-53,46.9C-65.9,35.4,-71.6,17.7,-70.8,0.9C-70.1,-15.9,-62.8,-31.8,-51.2,-40.5C-39.6,-49.2,-23.7,-50.7,-9.1,-52.1C5.5,-53.5,11,-55.8,24.6,-57.6C38.1,-59.4,38.1,-49.9,38.1,-49.9" transform="translate(100 100)" style={{opacity: 0.2}}/>
      <g transform="translate(100 100) scale(0.8)">
        <path d="M-27.4-44.6C-16-52.9-1.2-56.9,12.7-53.7C26.6-50.5,39.6-40.1,47.5-27.2C55.4-14.3,58.2,1.1,53.8,14.6C49.4,28.1,37.8,39.7,24.5,44.5C11.2,49.3,-3.8,47.3,-19.2,42.4C-34.6,37.5,-50.4,29.7,-57.1,17.2C-63.8,4.7,-61.4,-12.5,-53.4,-26.4C-45.4,-40.3,-31.8,-50.9,-27.4,-44.6" fill="#A7FFEB" style={{opacity: 0.3}} transform="translate(15, -15) rotate(20)" />
        <path d="M-34.9,-54.9C-28.5,-67.2,-14.2,-73.2,2.8,-73.4C19.9,-73.5,39.8,-67.9,51.6,-56.2C63.4,-44.5,67.1,-26.7,65.5,-10.8C63.9,5.2,57.1,19.3,47.3,31.2C37.5,43,24.8,52.6,10.6,56.5C-3.5,60.4,-19.1,58.7,-32.8,52.2C-46.4,45.7,-58.2,34.4,-63.3,20.4C-68.5,6.4,-67,-10.3,-59.6,-22.8C-52.2,-35.3,-38.9,-43.6,-34.9,-54.9Z" fill="white" transform="translate(0,0)" filter="url(#f1)"/>
        <text x="0" y="5" fontFamily="var(--font-pt-sans)" fontSize="24" textAnchor="middle" fill="#333">Clarity</text>
      </g>
      <defs>
        <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
    </svg>
);


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
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary/30">
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
              <div className="w-full max-w-md mx-auto object-contain rounded-xl">
                 <HeroIllustration />
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

        <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
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
