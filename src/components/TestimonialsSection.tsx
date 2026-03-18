import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Juliano Vaz",
    role: "Ex-aluno ADA Recife · Turma 2021",
    quote:
      "Antes da Academy, eu achava que inovação era só sobre tecnologia. Aprendi que inovar é, antes de tudo, entender as pessoas. O CBL mudou completamente minha forma de pensar projetos.",
    accent: "yellow" as const,
    image: "/juliano.jpg"
  },
  {
    name: "Antonio Chiappetta",
    role: "Ex-aluno ADA Itália · Turma 2016",
    quote:
      "A Apple Developer Academy não se dedica apenas à aprendizagem de programação. Ela ajuda os estudantes a superar obstáculos e os capacita, além de ter me proporcionado o entusiasmo e a curiosidade que me movem hoje.",
    accent: "blue" as const,
    image: "/foto_antonio.jpg"
  },
  {
    name: "Aisyah Widya Nur Shadrina",
    role: "Ex-aluna ADA Indonésia · Turma 2020",
    quote:
      "Trabalhar em times multidisciplinares foi desafiador, mas me mostrou que as melhores soluções nascem quando você junta pessoas com visões diferentes. Essa é a verdadeira inovação.",
    accent: "pink" as const,
    image: "/aysha.jpg"
  },
  {
    name: "Arthur Motelevicz",
    role: "Ex-aluno ADA Curitiba · Turma 2013",
    quote:
      "A Apple Developer Academy me deu forças para ir em busca dos meus sonhos e implementar minhas ideias com algo ao qual dediquei toda minha vida",
    accent: "yellow" as const,
    image: "/arthur.jpg"
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
