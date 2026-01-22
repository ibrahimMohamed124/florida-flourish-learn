import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, BookOpen, Microscope, Globe, Palette, Users } from "lucide-react";

const subjects = [
  { icon: BookOpen, title: "Language Arts", description: "Reading, writing, grammar, and literature studies" },
  { icon: Calculator, title: "Mathematics", description: "From basic operations to pre-algebra concepts" },
  { icon: Microscope, title: "Science", description: "Hands-on experiments and STEM projects" },
  { icon: Globe, title: "Social Studies", description: "History, geography, and civic education" },
  { icon: Palette, title: "Arts", description: "Visual arts, music, and creative expression" },
  { icon: Users, title: "Physical Education", description: "Team sports, fitness, and healthy habits" },
];

const Elementary = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/programs" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
                Grades 1-5
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Elementary School
              </h1>
              <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8">
                Building strong academic foundations while nurturing curiosity and creativity. 
                Our elementary program challenges students with rigorous academics while 
                providing personalized support for every learner.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elementary students in class"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Core Curriculum
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Students working together"
              className="rounded-2xl shadow-elevated"
            />
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Approach
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Personalized Learning for Every Student
              </h2>
              <p className="text-muted-foreground mb-6">
                With small class sizes and dedicated teachers, we identify each student's 
                strengths and areas for growth. Our differentiated instruction ensures 
                every child is appropriately challenged and supported.
              </p>
              <ul className="space-y-3">
                {["8:1 student-teacher ratio", "Individualized learning plans", "Regular progress assessments", "Parent communication"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="compact" title="Enroll Your Child" description="Join our elementary community today!" />
    </Layout>
  );
};

export default Elementary;
