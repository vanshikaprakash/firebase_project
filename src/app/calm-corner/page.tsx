
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BookOpen, Music, Video, Clock, PenSquare, Moon, Feather } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import Link from "next/link";

const calmResources: {
  icon: LucideIcon;
  title: string;
  description: string;
  url: string;
}[] = [
  {
    icon: BookOpen,
    title: "Atomic Habits",
    description: "An easy & proven way to build good habits & break bad ones.",
    url: "https://jamesclear.com/atomic-habits",
  },
  {
    icon: Music,
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces on Spotify.",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP",
  },
  {
    icon: Video,
    title: "10-Min Meditation",
    description: "A guided mindfulness meditation to help you be more present.",
    url: "https://www.youtube.com/watch?v=inpok4MKVLM",
  },
  {
    icon: Clock,
    title: "Deep Work Lofi",
    description: "Lofi hip hop radio - beats to relax, study, and focus.",
    url: "https://www.youtube.com/watch?v=wGgbo-QtL58",
  },
  {
    icon: PenSquare,
    title: "Stoic Journal App",
    description: "A journaling app that helps you reflect and live a more virtuous life.",
    url: "https://stoic.app/",
  },
  {
    icon: Moon,
    title: "Insight Timer",
    description: "The #1 free app for sleep, anxiety, and stress with guided meditations.",
    url: "https://insighttimer.com/",
  },
];

export default function CalmCornerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <section id="calm-corner" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Feather className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Calm Corner
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your curated space for books, music, meditation, and mindful tools.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {calmResources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex flex-col h-full bg-card p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                      <resource.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      {resource.description}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                      Visit Resource &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
