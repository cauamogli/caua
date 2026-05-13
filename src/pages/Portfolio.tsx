import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Instagram, ExternalLink, Briefcase, Cpu, Code2, GraduationCap, Database, Sparkles, ArrowDown, MapPin, Calendar } from "lucide-react"; // Remova as duplicações
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import avatar from "@/assets/avatar.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const NAME = "Cauã Brito"; // Alterei o nome para Cauã Brito.
const HANDLE = "@cauaritoo_"; // Alterei para o seu handle.

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 78 },
  { name: "Flutter / SUPABASE", level: 85 },
];

const experiences = [
  {
    role: "Estagiário de Suporte de TI",
    company: "SEGOV - Palácio do Buriti",
    period: "Maio 2022 — Janeiro 2024",
    desc: "Atendimento de chamados, instalação de impressoras, configuração de Pacote Office, habilitação de rede e outros serviços de suporte técnico.",
    icon: Briefcase,
  },
{
  role: "Desenvolvedor Full Stack",
  company: "Empresa de Engenharia de Telecomunicações",
  period: "Maio 2024 — Presente",
  desc: "Desenvolvimento de soluções internas para telecomunicações, automação de processos, tratamento de planilhas, criação de interfaces web e apoio técnico em demandas relacionadas a clientes e dados operacionais.",
  icon: Cpu,
},
  {
    role: "Monitor de Informática para Idosos",
    company: "Centro Universitário UDF",
    period: "2025",
    desc: "Ministrei curso introdutório de informática para idosos, promovendo inclusão digital e ensinando noções básicas de navegação e uso de ferramentas.",
    icon: Code2,
  },
  {
    role: "Bacharelado em Ciência da Computação",
    company: "Centro Universitário UDF",
    period: "2022 — 2026 (formatura prevista para meio do ano)",
    desc: "Foco em Engenharia de Software, Inteligência Artificial e Sistemas Distribuídos. CRA: 9.1.",
    icon: GraduationCap,
  },
];

const projects = [
  {
    title: "ProntoMed",
    desc: "Aplicativo mobile desenvolvido em Flutter para informar a situação das UPAs do Distrito Federal, exibindo filas, tempo de espera e localização das unidades.",
    tags: ["Flutter", "Supabase", "Mobile", "Saúde", "Geolocalização"],
    image: project1,
    github: "https://github.com/cauamogli/prontomed",
    demo: "#",
  },
  {
  title: "O Estudante de Turing",
  desc: "Game educativo de plataforma 2D para PC, onde o jogador coleta itens, resolve puzzles de lógica, álgebra e computação, e enfrenta bugs para avançar nas fases e “passar de ano”.",
  tags: ["Godot", "Game 2D", "Educação", "Lógica", "Máquina de Turing"],
  image: project2,
},
{
  title: "Projeto Musicais",
  desc: "Produção musical profissional utilizando FL Studio, com foco em criação de beats, mixagem, masterização e desenvolvimento de projetos sonoros autorais. Experiência na produção de estilos variados, organização de sessões, tratamento de áudio e construção de arranjos musicais para lançamentos digitais e portfólio artístico.",
  tags: ["Fl Studio", "Mixagem", "808", "looperman"],
  image: project3,
},
];

const TypedText = ({ words }: { words: string[] }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del && text === word) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((v) => v + 1);
        return;
      }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink text-primary">_</span>
    </span>
  );
};

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="container max-w-6xl py-24 scroll-mt-20">
    {children}
  </section>
);

const SectionTitle = ({ kicker, title }: { kicker: string; title: string }) => (
  <div className="mb-12 text-center animate-slide-up">
    <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">{`// ${kicker}`}</p>
    <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    <div className="mt-4 mx-auto h-px w-24 bg-gradient-primary" />
  </div>
);

const Portfolio = () => {
  useEffect(() => {
    document.title = `${NAME} — Portfólio Dev`;
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute('content', `Portfólio de ${NAME}, desenvolvedor full-stack e estudante de Ciência da Computação.`);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <nav className="container max-w-6xl flex items-center justify-between h-16">
          <a href="#home" className="font-mono font-bold text-lg">
            <span className="text-gradient">&lt;CB/&gt;</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {["sobre", "experiencia", "projetos", "skills", "contato"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="text-muted-foreground hover:text-primary transition-colors capitalize">
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5561994649278"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground hover:opacity-90 transition shadow-neon"
          >
            <Mail className="w-4 h-4" /> Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <div className="container max-w-6xl relative grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6 animate-slide-up">
            <Badge variant="outline" className="border-primary/40 text-primary font-mono">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              Disponível para oportunidades
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Olá, sou o Cauã <br />

            </h1>
            <div className="text-2xl md:text-3xl font-mono h-10">
              <TypedText words={[
  "Full Stack Developer",
  "Flutter Developer",
  "React Developer",
  "Criador de soluções digitais"
]} />
            </div>
            <p className="text-muted-foreground text-lg max-w-lg">
              Desenvolvedor Full Stack em formação, com experiência em React, TypeScript, Node.js, Flutter e Supabase.
  Crio aplicações web e mobile com foco em usabilidade, automação de processos e soluções reais para empresas.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-neon hover:opacity-90">
                <a href="#projetos">Ver Projetos <Sparkles className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
                <a href="#contato">Fale comigo</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/cauamogli" },
                { icon: Linkedin, href: "https://br.linkedin.com/in/cauabsb" },
                { icon: Instagram, href: "https://www.instagram.com/cauabritoo_" },
                { icon: Mail, href: "https://wa.me/5561994649278" },
              ].map((s, idx) => (
                <a key={idx} href={s.href} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-neon transition-all">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
            <div className="relative aspect-square rounded-3xl overflow-hidden glow-border animate-glow-pulse">
              <img src={avatar} alt={`Foto de ${NAME}`} width={768} height={768} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  status: online
                </div>
                <div className="text-muted-foreground mt-1">{HANDLE}</div>
              </div>
            </div>
          </div>
        </div>
        <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </a>
      </section>

      {/* About */}
      <Section id="sobre">
        <SectionTitle kicker="quem sou eu" title="Sobre mim" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Calendar, label: "Idade", value: "22 anos" },
            { icon: MapPin, label: "Naturalidade", value: "Brasília, DF" },
            { icon: GraduationCap, label: "Formação", value: "C.C. - 2026" },
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:shadow-neon transition-all hover:-translate-y-1">
              <item.icon className="w-6 h-6 text-primary mb-3" />
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="text-lg font-semibold mt-1">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 glass rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Sou estudante de <span className="text-primary font-medium">Ciência da Computação</span>, prestes a me formar
            no meio de 2026. Curioso por natureza, vivo entre <span className="text-secondary font-medium">linhas de código</span>,
            algoritmos e cafés. Adoro transformar problemas complexos em soluções elegantes — e ainda fazer com que pareçam bonitas.
          </p>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experiencia">
        <SectionTitle kicker="trajetória" title="Experiências" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px" />
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const left = i % 2 === 0;
            return (
              <div key={i} className={`relative flex md:items-center mb-12 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-neon z-10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className={`pl-16 md:pl-0 md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:shadow-purple transition-all hover:-translate-y-1">
                    <p className="font-mono text-xs text-primary mb-1">{exp.period}</p>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-secondary font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projetos">
        <SectionTitle kicker="meus trabalhos" title="Projetos em destaque" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group glass rounded-2xl overflow-hidden hover:shadow-neon transition-all hover:-translate-y-2">
              <div className="aspect-video overflow-hidden relative">
                <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-gradient transition">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <SectionTitle kicker="stack" title="Habilidades" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <div key={i} className="glass rounded-xl p-5">
              <div className="flex justify-between mb-2 font-mono text-sm">
                <span>{s.name}</span>
                <span className="text-primary">{s.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto">
          {["Git", "Linux", "Tailwind", "Vite", "CSS", "GraphQL", "Canva", "Figma", "HTML", "MongoDB", "Three.js"].map((t) => (
            <span key={t} className="px-4 py-2 glass rounded-full text-sm font-mono hover:text-primary hover:shadow-neon transition cursor-default">
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contato">
        <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/30 rounded-full blur-3xl" />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">// vamos conversar</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Bora criar algo <span className="text-gradient">incrível</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Aberto a oportunidades, freelas e colaborações. Me chama no Insta ou manda um e-mail!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-neon">
                <a href="mailto:cauabsilva990@gmail.com"><Mail className="mr-2 w-4 h-4" /> cauabsilva990@gmail.com</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary/40 hover:bg-secondary/10">
                <a href="https://www.instagram.com/cauabritoo_" target="_blank" rel="noreferrer"><Instagram className="mr-2 w-4 h-4" /> {HANDLE}</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} {NAME} — Built with <span className="text-primary">&lt;3</span> & React</p>
      </footer>
    </div>
  );
};

export default Portfolio;
