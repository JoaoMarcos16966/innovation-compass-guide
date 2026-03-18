import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  accent: "yellow" | "blue" | "pink";
  index: number;
  image: string;
}

const accentBorder = {
  yellow: "border-l-academy-yellow",
  blue: "border-l-academy-blue",
  pink: "border-l-academy-pink",
};

const TestimonialCard = ({ name, role, quote, accent, index, image }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl border-l-4 ${accentBorder[accent]} bg-card p-6 shadow-sm`}
    >
      {/* Aqui entra a sua foto! */}
      <img 
        src={image} 
        alt={`Foto de ${name}`} 
        className="mb-4 h-12 w-12 rounded-full object-cover" 
      />
      
      {/* Aqui entra o texto do depoimento */}
      <p className="mb-6 text-sm italic text-muted-foreground">
        "{quote}"
      </p>

      {/* Aqui fica o nome e o cargo */}
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;