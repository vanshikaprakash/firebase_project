import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReflectionWall from "@/components/ReflectionWall";

export default function ReflectionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="container py-12 md:py-24">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Community Reflection Wall</h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            A space to share and connect. You are not alone.
                        </p>
                    </div>
                    <ReflectionWall />
                </div>
            </main>
            <Footer />
        </div>
    );
}
