
"use client";

import { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResourceCard from '@/components/ResourceCard';
import { 
    resourcesData, 
    featuredToolkit,
    studentAdvice,
    externalLinks,
    weeklyChallenges,
    type ResourceCategory 
} from '@/lib/resources-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { BookOpen, ChevronsRight, ExternalLink, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

const categories: ResourceCategory[] = ["All", "Focus & Productivity", "Emotional Well-being", "Digital Detox", "Sleep & Rest", "Crisis & Support"];

export default function ResourcesPage() {
    const [filter, setFilter] = useState<ResourceCategory>('All');

    const filteredResources = filter === 'All'
        ? resourcesData
        : resourcesData.filter(resource => resource.category === filter);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/20">
                <section className="w-full py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <BookOpen className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Student Wellness Resources</h1>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A collection of toolkits, tips, and support links to help you navigate college life.
                            </p>
                        </div>

                        {/* Featured Toolkit Section */}
                        <Card className="mt-12 w-full max-w-4xl mx-auto shadow-lg bg-background">
                            <CardHeader className="text-center">
                                <div className="inline-block mx-auto rounded-full bg-accent/20 p-2 mb-2">
                                    <Star className="h-6 w-6 text-accent-foreground"/>
                                </div>
                                <CardTitle className="font-headline">{featuredToolkit.title}</CardTitle>
                                <CardDescription>A hand-picked set of micro-practices for stressful times.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                {featuredToolkit.tools.map(tool => (
                                    <div key={tool.name} className="flex flex-col items-center gap-2 p-2 rounded-lg transition-colors hover:bg-primary/5">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                            <tool.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium">{tool.name}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                <Separator className="my-12" />

                <section className="container px-4 md:px-6">
                    {/* Weekly Micro-Challenges Section */}
                     <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Weekly Micro-Challenge</h2>
                    </div>
                     <Carousel className="w-full max-w-lg mx-auto" opts={{ loop: true }}>
                        <CarouselContent>
                            {weeklyChallenges.map((challenge, index) => (
                                <CarouselItem key={index}>
                                    <Card className="bg-background/70">
                                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                            <p className="font-medium mb-4">{challenge}</p>
                                            <Button size="sm" className="shadow hover:shadow-md transition-shadow">
                                                <ShieldCheck className="mr-2"/> Mark as Done
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>

                <Separator className="my-12" />
                
                <section className="container px-4 md:px-6">
                     {/* Student-Sourced Advice Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Student-Sourced Advice</h2>
                        <p className="text-muted-foreground mt-2">Anonymous tips from students, for students.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {studentAdvice.map((advice, index) => (
                             <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 bg-background shadow-sm rounded-r-md">
                                <p className="italic text-foreground">"{advice.text}"</p>
                                <footer className="mt-2 text-xs font-semibold text-muted-foreground">Anonymous, {advice.category}</footer>
                            </blockquote>
                        ))}
                    </div>
                </section>

                <Separator className="my-12" />

                <section className="container px-4 md:px-6">
                     {/* Tip Grid Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Explore Tips & Routines</h2>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 mb-8">
                        {categories.map(category => (
                            <Button
                                key={category}
                                variant={filter === category ? 'default' : 'outline'}
                                onClick={() => setFilter(category)}
                                className={cn(
                                    "rounded-full transition-shadow",
                                    filter === category ? 'shadow-md' : 'shadow-sm hover:shadow-md'
                                )}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        {filteredResources.map(resource => (
                            <ResourceCard key={resource.id} resource={resource} />
                        ))}
                    </div>
                    {filteredResources.length === 0 && (
                        <div className="text-center text-muted-foreground mt-16">
                            <p>No resources found for this category.</p>
                        </div>
                    )}
                </section>

                <Separator className="my-12" />

                <section className="container px-4 md:px-6 pb-20">
                    {/* External Links Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Helpful External Links</h2>
                         <p className="text-muted-foreground mt-2">Trusted third-party mental health and productivity resources.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                       {externalLinks.map((link) => (
                           <Card key={link.title} className="bg-background hover:bg-secondary/40 transition-colors shadow-sm hover:shadow-md">
                                <CardContent className="p-4">
                                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold text-foreground">{link.title}</h3>
                                            <p className="text-sm text-muted-foreground">{link.description}</p>
                                        </div>
                                        <ExternalLink className="h-5 w-5 text-muted-foreground ml-4 shrink-0" />
                                    </Link>
                                </CardContent>
                           </Card>
                       ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
