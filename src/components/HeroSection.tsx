import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* 1. Imagem de fundo (Removemos o -z-10) */}
      <div
        className="absolute inset-0"
        style={{ 
          backgroundImage: "url('/fundo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* 2. Camada que escurece a foto (Removemos o -z-10) */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      {/* 3. Conteúdo: Adicionamos "relative z-10" para garantir que o texto fica por cima da imagem */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-lg">
            <Lightbulb className="h-10 w-10 text-academy-yellow" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Guia de Bolso da Inovação
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Um guia prático para entender o que é inovação na Apple Developer
            Academy — e por que ela começa pelas pessoas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;