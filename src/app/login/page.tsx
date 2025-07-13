import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
