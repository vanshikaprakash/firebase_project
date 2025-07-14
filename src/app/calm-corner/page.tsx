
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const calmResources = [
  {
    emoji: "📘",
    title: "Atomic Habits",
    description: "An easy & proven way to build good habits & break bad ones.",
    url: "https://jamesclear.com/atomic-habits",
  },
  {
    emoji: "🎵",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces on Spotify.",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP",
  },
  {
    emoji: "🧘",
    title: "10-Min Meditation",
    description: "A guided mindfulness meditation to help you be more present.",
    url: "https://www.youtube.com/watch?v=inpok4MKVLM",
  },
  {
    emoji: "⏰",
    title: "Deep Work Lofi",
    description: "Lofi hip hop radio - beats to relax, study, and focus.",
    url: "https://www.youtube.com/watch?v=wGgbo-QtL58",
  },
  {
    emoji: "📓",
    title: "Stoic Journal App",
    description: "A journaling app that helps you reflect and live a more virtuous life.",
    url: "https://stoic.app/",
  },
  {
    emoji: "🌙",
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                🧘 Calm Corner
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your curated space for books, music, meditation, and mindful tools.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {calmResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col h-full bg-card p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="text-4xl mb-4">{resource.emoji}</div>
                    <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
