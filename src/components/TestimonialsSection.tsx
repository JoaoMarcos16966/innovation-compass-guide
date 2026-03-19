import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Juliano Vaz",
    role: "Ex-aluno ADA Recife · Turma 2021",
    quote:
      "A área de inovação na Academy é o que nos diferencia. Ela nos dá as ferramentas de negócios e gestão para não 'chutarmos no escuro'. Com métodos de pesquisa e validação, aprendemos a reduzir riscos e a tomar decisões assertivas, transformando desafios em produtos reais e competitivos.",
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
  {
    name: "Mary Santoso",
    role: "Ex-aluna ADA Indonésia · Turma 2022",
    quote:
      "Como mãe em tempo integral, a Apple Developer Academy me ajudou a transformar e me concentrar na minha missão de assistir crianças com dificuldades de aprendizado semelhantes às que minha filha enfrenta",
    accent: "blue" as const,
    image: "/mary.jpg"
  },
  {
    name: "Pedro Barroca",
    role: "Ex-aluno ADA Recife · Turma 2018",
    quote:
      "O que aprendi mudou bastante a forma como enxergo meus aplicativos. Hoje penso neles de forma mais estratégica, com propostas de valor mais claras, que os tornam realmente relevantes e competitivos. Também passei a pensar na sustentabilidade das ideias definindo um modelo de negócios desde o início do processo.",
    accent: "pink" as const,
    image: "/barroca.jpeg"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* === SUA FOTO NOVA ENTRA AQUI === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-5xl overflow-hidden rounded-3xl shadow-lg"
        >
          <img 
            src="/turma.jpg" 
            alt="Foto da galera da Academy" 
            className="h-[300px] md:h-[450px] w-full object-cover"
          />
        </motion.div>
        {/* ================================ */}

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