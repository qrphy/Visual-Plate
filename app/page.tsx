import HeroSection from "./_components/HeroSection";
import InstantDemoSection from "./_components/InstantDemoSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import SocialProofStrip from "./_components/SocialProofStrip";
import BottomCtaSection from "./_components/BottomCtaSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <InstantDemoSection />
      <HowItWorksSection />
      <SocialProofStrip />
      <BottomCtaSection />
      <Footer />
    </main>
  );
}
