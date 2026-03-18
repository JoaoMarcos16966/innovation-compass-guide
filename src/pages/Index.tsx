import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DevPortfolio from "@/components/DevPortfolio";
import { Button } from "@/components/ui/button";
import { Heart, Wrench } from "lucide-react";

const Index = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <InnovationSection />
      <TestimonialsSection />

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center space-y-4">
        <Button
          size="lg"
          onClick={() => setPortfolioOpen(true)}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold text-base px-8"
        >
          <Wrench className="mr-2 h-5 w-5" />
          Explorar Ferramentas
        </Button>
        <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          Feito com <Heart className="h-4 w-4 text-academy-pink" /> na Apple Developer Academy
        </p>
      </footer>

      <DevPortfolio open={portfolioOpen} onOpenChange={setPortfolioOpen} />
    </div>
  );
};

export default Index;
