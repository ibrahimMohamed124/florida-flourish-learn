import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, BookOpen, Users, Palette, Microscope, Music, Globe } from "lucide-react";

const programs = [
  {
    title: "Kindergarten",
    ages: "Ages 5-6",
    description: "A joyful introduction to learning through play, exploration, and foundational skill development. Our kindergarten program nurtures curiosity while building essential literacy and numeracy skills.",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    path: "/programs/kindergarten",
    highlights: ["Play-based learning", "Phonics & early reading", "Social skills development", "Creative expression"],
  },
  {
    title: "Elementary School",
    ages: "Grades 1-5",
    description: "Building strong academic foundations while nurturing creativity, critical thinking, and a love for learning. Our elementary program challenges students while providing personalized support.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    path: "/programs/elementary",
    highlights: ["Core academics", "STEM integration", "Arts & humanities", "Character education"],
  },
  {
    title: "Middle School",
    ages: "Grades 6-8",
    description: "Preparing students for high school and beyond through rigorous academics, leadership development, and personal growth. Our middle school program builds confidence and independence.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    path: "/programs/middle-school",
    highlights: ["Advanced academics", "Leadership opportunities", "High school prep", "Community service"],
  },
];

const enrichment = [
  { icon: Palette, name: "Visual Arts", description: "Drawing, painting, sculpture, and digital art" },
  { icon: Music, name: "Music", description: "Instrumental, vocal, and music theory" },
  { icon: Microscope, name: "STEM Lab", description: "Hands-on science and technology projects" },
  { icon: Globe, name: "World Languages", description: "Spanish and French instruction" },
  { icon: BookOpen, name: "Library & Literature", description: "Reading programs and book clubs" },
  { icon: Users, name: "Athletics", description: "Team sports and physical education" },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              Academic Programs
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Programs for{" "}
              <span className="relative">
                Every Stage
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              From kindergarten through 8th grade, our programs are designed to meet students 
              where they are and help them reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                        {program.ages}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to={program.path}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Beyond the Classroom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Enrichment Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Our enrichment programs help students discover new passions and develop well-rounded skills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichment.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="compact" />
    </Layout>
  );
};

export default Programs;
