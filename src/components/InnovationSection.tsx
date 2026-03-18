import {
  Lightbulb,
  Users,
  Heart,
  Rocket,
  Target,
  Puzzle,
} from "lucide-react";
import ConceptCard from "./ConceptCard";
import { motion } from "framer-motion";

const concepts = [
  {
    icon: Lightbulb,
    title: "O que é Inovação?",
    description:
      "Inovação na Apple Developer Academy baseia-se não apenas em noções de programação, e sim numa metodologia que visa a criação de tecnologias que causem algum impacto social, ou melhor, que buscam trazer soluções para problemas reais do dia à dia do usuário. ",
    gradient: "yellow" as const,
  },
  {
    icon: Users,
    title: "Design Centrado no Ser Humano",
    description:
      "Todo projeto parte das pessoas. Usamos o Human-Centered Design (HCD) para entender necessidades reais antes de pensar em código. Ouvir, observar e empatizar são os primeiros passos.",
    gradient: "blue" as const,
  },
  {
    icon: Heart,
    title: "Challenge Based Learning (CBL)",
    description:
      "Aprendemos enfrentando desafios reais. O CBL nos guia por três fases: Engajamento, Investigação e Ação — sempre conectando aprendizado técnico com impacto social.",
    gradient: "pink" as const,
  },
  {
    icon: Target,
    title: "Problema vs. Solução",
    description:
      "Antes de construir, é preciso entender profundamente o problema. Na Academy, dedicamos tempo para validar hipóteses, conversar com usuários e iterar antes de escrever uma linha de código.",
    gradient: "yellow" as const,
  },
  {
    icon: Puzzle,
    title: "Interdisciplinaridade",
    description:
      "Times diversos geram soluções mais ricas. Designers, desenvolvedores e pessoas de negócios trabalham juntos, trazendo perspectivas diferentes para cada desafio.",
    gradient: "blue" as const,
  },
  {
    icon: Rocket,
    title: "Prototipação e Iteração",
    description:
      "Errar rápido para acertar mais rápido. Protótipos de baixa e alta fidelidade nos ajudam a testar ideias cedo e evoluir com feedback real dos usuários.",
    gradient: "pink" as const,
  },
];

const InnovationSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-academy-blue/20 px-4 py-1 text-sm font-medium text-foreground">
            Conceitos Fundamentais
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Pilares da Inovação na Academy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Esses são os conceitos que guiam como pensamos, criamos e entregamos
            projetos com propósito.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept, i) => (
            <ConceptCard key={concept.title} {...concept} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
