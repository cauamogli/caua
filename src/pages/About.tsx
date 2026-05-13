import heroBg from "@/assets/hero-bg.jpg";

const teamMembers = [
  {
    name: "Kenji Yamamoto — 父 (Father)",
    links: [
      { label: "instagram", href: "https://instagram.com" },
      { label: "kenji@soilandspirit.com", href: "mailto:kenji@soilandspirit.com" },
    ],
  },
  {
    name: "Yuki Yamamoto — 母 (Mother)",
    links: [
      { label: "yuki@soilandspirit.com", href: "mailto:yuki@soilandspirit.com" },
    ],
  },
];

const About = () => {
  return (
    <div className="bg-black min-h-screen text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-20">
          {/* Left column — brand + team */}
          <div className="space-y-12">
            <h1 className="text-2xl font-normal font-sans tracking-normal">
              soil & spirit
            </h1>

            <div className="space-y-10">
              {teamMembers.map((member) => (
                <div key={member.name} className="space-y-2">
                  <h3 className="text-base font-medium font-sans">{member.name}</h3>
                  <div className="flex flex-col gap-1">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-sm text-primary underline hover:text-primary/80 transition-colors w-fit"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — mission + image */}
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed">
              Soil & Spirit is a family workshop in Arita, Japan — run by a husband
              and wife who have shaped clay together for over thirty years. Kenji
              throws on the wheel. Yuki paints every motif by hand. Together they
              mix glazes from wood ash and local stone, fire in a climbing kiln,
              and let each piece carry the quiet imperfection that only handwork
              allows. Nothing is mass-produced. Nothing is rushed. What leaves
              their studio is made to be used, held, and passed down.
            </p>

            <img
              src={heroBg}
              alt="Ceramic pitcher in studio light"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
