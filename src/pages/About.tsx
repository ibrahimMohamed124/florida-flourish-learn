import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Users, GraduationCap, Heart, Star, Target, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Nurturing Environment",
    description: "Every child is known, valued, and supported in their unique journey.",
  },
  {
    icon: Star,
    title: "Academic Excellence",
    description: "Rigorous curriculum that challenges and inspires lifelong learners.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Strong partnerships between families, teachers, and students.",
  },
  {
    icon: Target,
    title: "Individual Focus",
    description: "Personalized learning paths that meet each child where they are.",
  },
];

const About = () => {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              About Our School
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Where Learning Meets{" "}
              <span className="relative">
                Purpose
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
              Since 2009, Shores Academy has been redefining K-8 education in Florida 
              through personalized learning, small class sizes, and a commitment to 
              developing the whole child.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Teacher working with students"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Empowering Every Student to Reach Their Full Potential
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Shores Academy, we believe that every child has unique gifts waiting to be discovered. 
                Our mission is to create a nurturing educational environment where students develop 
                academic excellence, emotional intelligence, and the confidence to pursue their dreams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our innovative microschool model, we combine the best of traditional education 
                with modern pedagogical approaches, ensuring each student receives the individual 
                attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide everything we do, from curriculum design to daily interactions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Experienced, Passionate Educators
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our leadership team brings decades of combined experience in education, 
                child development, and school administration. We're united by a shared 
                passion for innovative education and student success.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Dr. Amanda Collins"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dr. Amanda Collins</p>
                  <p className="text-sm text-muted-foreground">Head of School</p>
                  <p className="text-sm text-primary mt-1">Ed.D. in Educational Leadership</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="School leadership meeting"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Fully Accredited & State Certified
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Shores Academy is accredited by the Florida Council of Independent Schools (FCIS) 
                and certified by the Florida Department of Education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
