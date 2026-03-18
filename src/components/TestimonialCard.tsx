import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  accent: "yellow" | "blue" | "pink";
  index: number;
}

const accentBorder = {
  yellow: "border-l-academy-yellow",
  blue: "border-l-academy-blue",
  pink: "border-l-academy-pink",
};

const accentBg = {
  yellow: "bg-academy-yellow/15",
  blue: "bg-academy-blue/15",
  pink: "bg-academy-pink/15",
};

const TestimonialCard = ({ name, role, quote, accent, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl border-l-4 ${accentBorder[accent]} bg-card p-6 shadow-sm`}
    >
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${accentBg[accent]}`}>
        <Quote className="h-5 w-5 text-foreground" />
      </div>
      <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">
        "{quote}"
      </p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
