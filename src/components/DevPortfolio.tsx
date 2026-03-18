import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Trophy, Route, Lightbulb, ArrowRight, HeartHandshake } from "lucide-react";

interface DevPortfolioProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const devs = [
  {
    name: "Mary Santoso",
    role: "iOS Developer & UX Researcher",
    image: "/mary.jpg",
    case: "WonderJack — App de Saúde Mental",
    pain: "A falta de ferramentas digitais que sejam adequadas e engajadoras para crianças neurodivergentes e que consigam treinar ativamente suas funções executivas e processos mentais de forma lúdica.",
    journey: [
      <><strong>Pesquisa Empática:</strong> Entrevistas com mais de 30 estudantes para entender suas rotinas e desafios de saúde mental.</>,
      <><strong>Definição:</strong> Mapeamento das dores e necessidades utilizando o framework de Human-Centered Design (HCD).</>,
      <><strong>Ideação e Prototipagem:</strong> Criação de protótipos rápidos submetidos a testes semanais.</>,
      <><strong>Iteração:</strong> Melhorias contínuas baseadas no feedback real dos usuários de teste.</>,
      <><strong>Lançamento:</strong> Publicação na App Store, alcançando rapidamente a marca de mais de 2.000 downloads.</>,
    ],
    result: "Redução de 40% nos relatos de estresse entre usuários ativos após 3 meses de uso.",
    techs: ["Swift", "SwiftUI", "Core Data", "HealthKit"],
  },
  {
    name: "Lucas Ferreira",
    role: "Full-Stack Developer & Design Thinker",
    photo: "👨‍💻",
    case: "EcoTrack — Sustentabilidade no Campus",
    pain: "A comunidade acadêmica não tinha visibilidade sobre o impacto ambiental de suas ações diárias no campus.",
    journey: [
      "Workshop de empatia com funcionários e alunos",
      "Criação de personas baseadas em dados reais",
      "CBL: desafio de reduzir pegada de carbono do campus",
      "Desenvolvimento ágil com sprints de 2 semanas",
      "Apresentação para diretoria da universidade",
    ],
    result: "O app foi adotado oficialmente pelo campus, ajudando a reduzir 15% no desperdício de recursos.",
    techs: ["React Native", "Node.js", "Firebase", "Charts"],
  },
  {
    name: "Ana Clara Ribeiro",
    role: "Product Designer & Developer",
    photo: "👩‍🎨",
    case: "AcessaJá — Acessibilidade Urbana",
    pain: "Pessoas com deficiência física enfrentavam barreiras invisíveis ao se locomover pela cidade.",
    journey: [
      "Imersão: acompanhar cadeirantes em trajetos reais",
      "Identificação de 50+ pontos de dor no trajeto urbano",
      "Co-criação do app com usuários com deficiência",
      "Testes de usabilidade com tecnologias assistivas",
      "Parceria com prefeitura para dados de acessibilidade",
    ],
    result: "Mapeamento colaborativo de 300+ locais acessíveis, premiado no Apple WWDC Student Challenge.",
    techs: ["SwiftUI", "MapKit", "VoiceOver", "CloudKit"],
  },
];

const DevPortfolio = ({ open, onOpenChange }: DevPortfolioProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="h-6 w-6 text-academy-yellow" />
            Portfólio dos Devs — Cases de Sucesso
          </DialogTitle>
          <DialogDescription>
            Conheça as jornadas reais de ex-alunos que transformaram dores de usuários em soluções inovadoras.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="dev-0" className="mt-4">
          <TabsList className="w-full grid grid-cols-3">
            {devs.map((dev, i) => (
              <TabsTrigger key={i} value={`dev-${i}`} className="text-xs sm:text-sm">
                {dev.photo} {dev.name.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {devs.map((dev, i) => (
            <TabsContent key={i} value={`dev-${i}`}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Dev info */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <span className="text-4xl">{dev.photo}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{dev.name}</h3>
                    <p className="text-sm text-muted-foreground">{dev.role}</p>
                  </div>
                </div>

                {/* Case */}
                <Card className="border-academy-blue/30" style={{ background: "var(--gradient-card-blue)" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-academy-yellow" />
                      {dev.case}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 mb-3">
                      <HeartHandshake className="h-5 w-5 text-academy-pink mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">A dor do usuário</p>
                        <p className="text-sm text-foreground">{dev.pain}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Journey */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Route className="h-5 w-5 text-academy-blue" />
                      O Caminho Percorrido
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2">
                      {dev.journey.map((step, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="flex items-center justify-center h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0 mt-0.5">
                            {j + 1}
                          </span>
                          <span className="text-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                {/* Result */}
                <Card className="border-academy-pink/30" style={{ background: "var(--gradient-card-pink)" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-academy-yellow" />
                      Resultado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground font-medium">{dev.result}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {dev.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default DevPortfolio;
