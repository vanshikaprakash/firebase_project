
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Heart, Users } from "lucide-react";
import React from "react";

const PhilosophyIllustration = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2">
        <path fill="#D1C4E9" d="M48.1,-63.3C61.8,-53.4,72.1,-37.8,75.3,-21.2C78.4,-4.6,74.4,13.1,65.6,27.1C56.8,41.1,43.2,51.5,28.5,59.9C13.8,68.2,-2.1,74.5,-17.8,71.5C-33.5,68.5,-49.1,56.2,-59.5,41.7C-69.9,27.2,-75.2,10.6,-73.8,-5.5C-72.4,-21.6,-64.3,-37.3,-52.2,-48.3C-40,-59.4,-23.9,-65.8,-7.4,-68.2C9.1,-70.6,20.2,-69.1,34.4,-70.5C48.6,-71.8,48.1,-63.3,48.1,-63.3" transform="translate(100 100)" />
      </g>
      <g transform="translate(90 90) scale(0.6)">
         <path d="M46.2,1.3C45,15.7,31.7,29.4,16.8,32.7C1.9,36,-14.6,28.8,-27,17.9C-39.4,7,-47.7,-7.7,-44.8,-20.9C-41.9,-34.1,-27.8,-45.8,-12.3,-46.7C3.2,-47.5,20,-37.5,31.8,-25.9C43.6,-14.3,47.4,-11.1,46.2,1.3Z" fill="#A7FFEB" transform="translate(50, 80) rotate(-30)" />
         <path d="M45.5,1.5C43.5,18.7,28.5,37,12.7,40.4C-3,43.7,-19.5,32.1,-31.6,18.1C-43.7,4.1,-51.4,-12.3,-47.8,-26.2C-44.2,-40.1,-29.3,-51.5,-12.7,-52.3C3.9,-53.2,22.2,-43.5,34.6,-31.2C47,-18.9,47.5,-15.8,45.5,1.5Z" fill="#FFFFFF" transform="translate(120, 100) rotate(30)" />
         <circle cx="100" cy="100" r="40" fill="#D1C4E9" />
         <path d="M92.5 112.45C89.167 117.117 80.5 124.5 70 112.45C59.5 100.4 67.5 89.95 75 87.45C82.5 84.95 85.5 91.45 90 94.45C94.5 97.45 97.5 94.45 102.5 91.45C107.5 88.45 115.5 81.45 125 91.45C134.5 101.45 125 117.45 120 119.95C115 122.45 107.5 114.95 105 112.45C102.5 109.95 95.833 107.783 92.5 112.45Z" fill="white"/>
      </g>
    </svg>
);


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Philosophy</h1>
                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A gentle approach to mental wellness, designed for students.
                   </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground">
                    College is a time of immense growth, but it can also be a period of significant stress and emotional challenge. We believe that mental wellness isn't about achieving a constant state of happiness, but about building the resilience to navigate the ups and downs of life.
                </p>
                <p className="max-w-[600px] text-muted-foreground">
                    MindBloom was created to be a safe, non-judgmental space where you can pause, connect with your feelings, and find small, actionable steps to move forward. We're not here to replace professional therapy, but to offer a first step, a daily companion, and a reminder that you're not alone.
                </p>
              </div>
              <div className="w-full max-w-md mx-auto object-contain rounded-xl">
                <PhilosophyIllustration />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Core Principles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Guiding our approach to support you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <Card>
                <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-center">Small, Actionable Steps</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground text-center">We believe in the power of micro-habits. Lasting change comes from small, consistent actions, not overwhelming transformations.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                        <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-center">Empathy & Non-Judgment</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground text-center">This is a safe space. All feelings are valid, and our goal is to provide gentle, understanding support without pressure.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                        <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-center">The Power of Connection</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground text-center">Knowing you're not alone is crucial. Our community wall is a place for shared experiences and mutual support, always with your privacy in mind.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
