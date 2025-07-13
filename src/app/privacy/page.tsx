
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container">
          <div className="prose prose-stone mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Privacy Policy</h1>
            <p className="lead">
                Your privacy is important to us. It is MindBloom's policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            <h2>1. Information We Collect</h2>
            <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. The primary data we collect is the content you voluntarily provide through our emotion check-in and community reflection features.
            </p>
             <h2>2. How We Use Your Information</h2>
            <p>
                The information you provide is used to generate personalized suggestions and to allow you to share anonymous reflections with the community. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Anonymized and aggregated data may be used for research purposes to improve our services.
            </p>
            <h2>3. Anonymity</h2>
            <p>
               When you choose to post to the Community Wall, you have the option to do so anonymously. We strip any identifying information to protect your privacy. However, please be mindful not to include personal information in the text of your reflections.
            </p>
            <h2>4. Data Security</h2>
            <p>
                We are committed to protecting the security of your information. We use a variety of security technologies and procedures to help protect your information from unauthorized access, use, or disclosure.
            </p>
            <h2>5. Your Consent</h2>
            <p>
                By using our site, you consent to our privacy policy.
            </p>
            <h2>Changes to Our Privacy Policy</h2>
            <p>
                If we decide to change our privacy policy, we will post those changes on this page.
            </p>
            <p>This policy is effective as of October 2024.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
