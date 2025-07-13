
"use client";

import { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResourceCard from '@/components/ResourceCard';
import { resourcesData, type ResourceCategory } from '@/lib/resources-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';

const categories: ResourceCategory[] = ["All", "Focus & Productivity", "Emotional Well-being", "Digital Detox", "Sleep & Rest", "Crisis & Support"];

export default function ResourcesPage() {
    const [filter, setFilter] = useState<ResourceCategory>('All');

    const filteredResources = filter === 'All'
        ? resourcesData
        : resourcesData.filter(resource => resource.category === filter);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <BookOpen className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Student Wellness Resources</h1>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A collection of tips, routines, and support links to help you navigate college life.
                            </p>
                        </div>

                        <div className="flex justify-center flex-wrap gap-2 mt-12 mb-8">
                            {categories.map(category => (
                                <Button
                                    key={category}
                                    variant={filter === category ? 'default' : 'outline'}
                                    onClick={() => setFilter(category)}
                                    className={cn(
                                        "rounded-full",
                                        filter === category && 'shadow-md'
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
