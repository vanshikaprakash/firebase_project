import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SuggestionsView from "@/components/SuggestionsView";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

function SuggestionsSkeleton() {
  return (
    <div className="container py-12 md:py-24">
        <div className="flex flex-col items-center space-y-4 text-center">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="max-w-2xl mx-auto mt-10 space-y-4">
            {[...Array(3)].map((_, i) => (
                <Card key={i}>
                    <CardContent className="p-6">
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default function SuggestionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<SuggestionsSkeleton />}>
          <SuggestionsView />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
