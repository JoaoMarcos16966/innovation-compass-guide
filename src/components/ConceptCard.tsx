import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ConceptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: "yellow" | "blue" | "pink";
  index: number;
}

const gradientMap = {
  yellow: "var(--gradient-card-yellow)",
  blue: "var(--gradient-card-blue)",
  pink: "var(--gradient-card-pink)",
};

const borderMap = {
  yellow: "border-academy-yellow/40",
  blue: "border-academy-blue/40",
  pink: "border-academy-pink/40",
};

const ConceptCard = ({ icon: Icon, title, description, gradient, index }: ConceptCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`rounded-xl border-2 ${borderMap[gradient]} p-6 shadow-sm transition-shadow hover:shadow-md`}
      style={{ background: gradientMap[gradient] }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-card/80 shadow-sm">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default ConceptCard;
