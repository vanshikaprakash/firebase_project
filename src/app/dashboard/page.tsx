// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BookOpen, Calendar, Quote, HeartPulse } from "lucide-react";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

const moodData = [
  { name: 'Mon', mood: 7 },
  { name: 'Tue', mood: 5 },
  { name: 'Wed', mood: 8 },
  { name: 'Thu', mood: 6 },
  { name: 'Fri', mood: 7 },
  { name: 'Sat', mood: 9 },
  { name: 'Sun', mood: 6 },
];

const recentCheckIns = [
    { id: 1, emotion: 'Anxious', date: 'Yesterday' },
    { id: 2, emotion: 'Happy', date: '3 days ago' },
    { id: 3, emotion: 'Calm', date: 'Last week' },
];

const savedResources = [
    { id: 1, title: "10-Min Meditation", category: "Meditation" },
    { id: 2, title: "Deep Work Lofi", category: "Music" },
];

const dailyQuote = {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
};


function DashboardSkeleton() {
    return (
        <div className="p-6">
            <Skeleton className="h-8 w-1/2 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Skeleton className="h-64 rounded-xl" />
                <Skeleton className="h-64 rounded-xl" />
                <Skeleton className="h-64 rounded-xl" />
                <Skeleton className="h-64 rounded-xl" />
                <Skeleton className="h-64 rounded-xl" />
            </div>
        </div>
    )
}

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="container py-12">
                     <DashboardSkeleton />
                </div>
            </main>
            <Footer />
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container py-12">
            <h1 className="text-3xl font-bold tracking-tight mb-6 font-headline">
                Welcome back, {user.displayName?.split(' ')[0] || 'friend'}! 👋
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mood Trends */}
                <Card className="lg:col-span-2 bg-background shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <BarChart className="w-5 h-5 text-primary"/>
                            Your Mood Trends
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <RechartsBarChart data={moodData}>
                                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                <Bar dataKey="mood" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </RechartsBarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Recent Check-ins */}
                <Card className="bg-background shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <HeartPulse className="w-5 h-5 text-primary"/>
                            Recent Check-ins
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                           {recentCheckIns.map(checkIn => (
                                <li key={checkIn.id} className="flex justify-between items-center text-sm">
                                    <span className="font-medium">{checkIn.emotion}</span>
                                    <span className="text-muted-foreground">{checkIn.date}</span>
                                </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Saved Resources */}
                <Card className="bg-background shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary"/>
                            Your Saved Resources
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {savedResources.map(resource => (
                                <li key={resource.id} className="text-sm p-2 rounded-md hover:bg-secondary transition-colors">
                                    <p className="font-semibold">{resource.title}</p>
                                    <p className="text-xs text-muted-foreground">{resource.category}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Daily Quote */}
                <Card className="bg-background shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Quote className="w-5 h-5 text-primary"/>
                            Daily Reminder
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <blockquote className="italic text-muted-foreground">"{dailyQuote.text}"</blockquote>
                        <p className="text-right text-sm font-semibold mt-2">— {dailyQuote.author}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
