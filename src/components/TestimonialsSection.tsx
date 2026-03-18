import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Ex-aluna · Turma 2023",
    quote:
      "Antes da Academy, eu achava que inovação era só sobre tecnologia. Aprendi que inovar é, antes de tudo, entender as pessoas. O CBL mudou completamente minha forma de pensar projetos.",
    accent: "yellow" as const,
  },
  {
    name: "Lucas Oliveira",
    role: "Ex-aluno · Turma 2022",
    quote:
      "O mais transformador foi aprender a errar rápido. Na Academy, prototipar e testar com pessoas reais me ensinou que nenhuma ideia sobrevive ao primeiro contato com o usuário — e tudo bem.",
    accent: "blue" as const,
  },
  {
    name: "Camila Rodrigues",
    role: "Ex-aluna · Turma 2023",
    quote:
      "Trabalhar em times multidisciplinares foi desafiador, mas me mostrou que as melhores soluções nascem quando você junta pessoas com visões diferentes. Essa é a verdadeira inovação.",
    accent: "pink" as const,
  },
  {
    name: "Pedro Henrique",
    role: "Ex-aluno · Turma 2021",
    quote:
      "A visão humana que a Academy trouxe para o desenvolvimento me acompanha até hoje no mercado. Empresas querem pessoas que entendem problemas, não apenas que escrevem código.",
    accent: "yellow" as const,
  },
  {
    name: "Ana Beatriz",
    role: "Ex-aluna · Turma 2022",
    quote:
      "Aprendi que inovação de verdade é inclusiva. Nossos projetos sempre começavam perguntando: quem estamos deixando de fora? Isso mudou minha perspectiva como desenvolvedora.",
    accent: "blue" as const,
  },
  {
    name: "Rafael Mendes",
    role: "Ex-aluno · Turma 2023",
    quote:
      "O processo de investigação do CBL me ensinou a fazer as perguntas certas. Hoje, antes de abrir o Xcode, eu abro um caderno e converso com pessoas. Esse é o superpoder da Academy.",
    accent: "pink" as const,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-academy-pink/20 px-4 py-1 text-sm font-medium text-foreground">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Quem viveu, conta
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Ex-alunos compartilham como a visão humana na construção de projetos
            transformou suas carreiras e perspectivas.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
