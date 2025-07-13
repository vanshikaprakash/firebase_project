
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Heart, Users } from "lucide-react";
import Image from "next/image";

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
              <Image
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Abstract art with soothing, calm colors"
                data-ai-hint="calm abstract"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
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
