import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <InnovationSection />
      <TestimonialsSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          Feito com <Heart className="h-4 w-4 text-academy-pink" /> na Apple Developer Academy
        </p>
      </footer>
    </div>
  );
};

export default Index;
