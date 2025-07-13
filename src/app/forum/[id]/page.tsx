
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThreadView from "@/components/ThreadView";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

function ThreadSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
            <div className="border-t pt-6 space-y-4">
                <Skeleton className="h-24 w-full" />
                <div className="flex justify-end">
                    <Skeleton className="h-10 w-24" />
                </div>
            </div>
             <div className="space-y-4">
                <h3 className="text-xl font-bold">Replies</h3>
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 border rounded-lg">
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-1/4" />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function ThreadPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="container py-12 md:py-24 max-w-4xl mx-auto">
                    <Suspense fallback={<ThreadSkeleton />}>
                        <ThreadView threadId={params.id} />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    );
}
