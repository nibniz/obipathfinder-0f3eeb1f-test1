import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ParentProblemSection } from "@/components/sections/ParentProblemSection";
import { WhatIsObiSection } from "@/components/sections/WhatIsObiSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ParentGainSection } from "@/components/sections/ParentGainSection";
import { LearningExperienceSection } from "@/components/sections/LearningExperienceSection";
import { ConfidenceSection } from "@/components/sections/ConfidenceSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ClosingCTASection } from "@/components/sections/ClosingCTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ParentProblemSection />
      <WhatIsObiSection />
      <HowItWorksSection />
      <ParentGainSection />
      <LearningExperienceSection />
      <ConfidenceSection />
      <TrustSection />
      <ClosingCTASection />
      <Footer />
    </main>
  );
};

export default Index;
