import EmotionCheckInForm from "@/components/EmotionCheckInForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CheckInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Emotion Check-in</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Let's take a moment to understand how you're feeling. This is a safe space, just for you.
            </p>
          </div>
          <EmotionCheckInForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
