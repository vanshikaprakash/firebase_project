
"use client";

import EmotionCheckInForm from "@/components/EmotionCheckInForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";

function FormSkeleton() {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-12 p-8">
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/2 mx-auto" />
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
      <Skeleton className="h-px w-full" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/2 mx-auto" />
        <Skeleton className="h-5 w-3/4 mx-auto" />
      </div>
       <Skeleton className="h-px w-full" />
       <div className="space-y-4">
        <Skeleton className="h-8 w-1/2 mx-auto" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  )
}

export default function CheckInPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Emotion Check-in</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Let's take a moment to understand how you're feeling. This is a safe space, just for you.
            </p>
          </div>
          {isClient ? <EmotionCheckInForm /> : <FormSkeleton />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
