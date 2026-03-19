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
    appImage: "/wonderjack.jpg",
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
    name: "Antonio Chiappetta",
    role: "Full-Stack Developer & Design Thinker",
    image: "/foto_antonio.jpg",
    appImage: "/elevate.jpg",
    case: "Elevate — App de Treinamento Cerebral",
    pain: "Muitas pessoas buscam melhorar habilidades cognitivas (como memória, foco e concisão na escrita), mas têm dificuldade em encontrar métodos que sejam, ao mesmo tempo, baseados em ciência, estruturados e suficientemente engajadores para manter uma prática diária.",
    journey: [
      <><strong>Fundação na Academy:</strong> Imersão no primeiro grupo da ADA Nápoles (2016), focando em aprendizagem prática e colaboração intensa com mentores.</>,
      <><strong>Desenvolvimento de Mindset:</strong> Superação de obstáculos técnicos e criativos, cultivando o "entusiasmo e a curiosidade" essenciais para a inovação.</>,
      <><strong>Engenharia Aplicada:</strong> Aplicação da formação em engenharia da computação para resolver problemas complexos de desenvolvimento de jogos cognitivos.</>,
      <><strong>Carreira Internacional:</strong> Mudança para Paris para integrar a Elevate Labs, aplicando as habilidades adquiridas na academia em um produto global.</>,
      <><strong>Criação de Jogos Desafiadores:</strong> Desenvolvimento de funcionalidades dentro do app, como o jogo "Brevity", focado em treinar a concisão na escrita.</>,
    ],
    result: "O Elevate consolidou-se como um app premiado de treinamento cerebral, ajudando milhões de usuários a manterem suas mentes afiadas. Para Antonio, é a realização de uma carreira de sucesso, movida pela base da Academy: “Ela ajuda os estudantes a superar obstáculos e os capacita”",
    techs: ["Swift", "iOS SDK", "Game Development", "Engenharia de Software"],
  },
  {
    name: "Graciela Gabrielle",
    role: "Co-fundadora & CEO · ADA Jacarta",
    image: "/mulheres.jpg",
    appImage: "/petanetra.jpg",
    case: "PetaNetra — Navegação Interna com AR",
    pain: "A falta de autonomia de pessoas cegas ou com deficiência visual (mais de 4 milhões apenas na Indonésia) para se locomoverem de forma segura e independente em ambientes internos.",
    journey: [
      <><strong>Motivação e Propósito:</strong> Inspiração direta na vivência dos pais de Graciela e no desejo da equipe de gerar um impacto social real.</>,
      <><strong>União da Equipe:</strong> Colaboração apaixonada entre três fundadoras (Graciela, Jessi e Yafonia) durante o programa da Academy em Jacarta.</>,
      <><strong>Desenvolvimento com AR:</strong> Uso avançado de Realidade Aumentada para criar trajetos rápidos e seguros, detectando paredes, pisos e outros objetos.</>,
      <><strong>Mapeamento do Mundo Real:</strong> Parcerias estratégicas com grandes instituições, como a Biblioteca de Jacarta, para mapear ambientes e aprimorar os recursos.</>,
      <><strong>Pioneirismo em Acessibilidade:</strong> Lançamento do primeiro aplicativo de navegação para ambientes internos da Indonésia focado inteiramente em acessibilidade visual.</>,
    ],
    result: "Criação de uma ferramenta pioneira e um 'presente' tecnológico que devolve a independência e a segurança de locomoção para milhares de usuários.",
    techs: ["ARKit", "Swift", "Acessibilidade", "Navegação Espacial"],
  },
];

const DevPortfolio = ({ open, onOpenChange }: DevPortfolioProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="h-6 w-6 text-academy-yellow" />
            Portfólio dos Devs — Cases de Sucesso
          </DialogTitle>
          <DialogDescription>
            Conheça as jornadas reais de ex-alunos que transformaram dores de usuários em soluções inovadoras.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="dev-0" className="mt-4 flex-1 flex flex-col min-h-0">
          <TabsList className="w-full grid grid-cols-3 shrink-0">
            {devs.map((dev, i) => (
              <TabsTrigger key={i} value={`dev-${i}`} className="text-xs sm:text-sm flex items-center gap-2">
                <img src={dev.image} alt={dev.name} className="h-5 w-5 rounded-full object-cover hidden sm:block" />
                {dev.name.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {devs.map((dev, i) => (
            <TabsContent key={i} value={`dev-${i}`} className="flex-1 min-h-0 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 pb-4"
              >
                {/* === AQUI É ONDE FICA A FOTO GRANDE DO PERFIL === */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                  <img 
                    src={dev.image} 
                    alt={`Foto de ${dev.name}`} 
                    className="h-16 w-16 rounded-full object-cover shadow-sm border-2 border-background" 
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{dev.name}</h3>
                    <p className="text-sm text-muted-foreground">{dev.role}</p>
                  </div>
                </div>

                {/* === AQUI ENTRA A FOTO DE DEMONSTRAÇÃO DO APP === */}
                {dev.appImage && (
                  <div className="w-full overflow-hidden rounded-xl shadow-sm border border-border/50 bg-muted/20">
                    <img 
                      src={dev.appImage} 
                      alt={`Demonstração do app ${dev.case}`} 
                      className="w-full h-auto max-h-[500px] object-contain" 
                    />
                  </div>
                )}

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