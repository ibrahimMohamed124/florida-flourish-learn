import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Users, Lightbulb, Heart, Target, Trophy } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "High School Prep", description: "Rigorous academics prepare students for competitive high schools" },
  { icon: Users, title: "Leadership Development", description: "Student government, clubs, and peer mentoring opportunities" },
  { icon: Lightbulb, title: "Critical Thinking", description: "Project-based learning that tackles real-world problems" },
  { icon: Heart, title: "Character Building", description: "Community service and social-emotional learning" },
  { icon: Target, title: "Goal Setting", description: "Individual academic and personal growth plans" },
  { icon: Trophy, title: "Extracurriculars", description: "Athletics, arts, robotics, and more" },
];

const MiddleSchool = () => {
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-primary-foreground text-sm font-medium mb-4">
                Grades 6-8
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Middle School
              </h1>
              <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8">
                Preparing students for high school and beyond through rigorous academics, 
                leadership opportunities, and personal growth. Our middle school program 
                builds confidence and independence.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Middle school students"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Middle School Experience
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
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

      {/* Results */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Proven Results
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                100% High School Placement
              </h2>
              <p className="text-muted-foreground mb-6">
                Our graduates consistently gain admission to their first-choice high schools, 
                including top-tier private and magnet programs. We provide personalized 
                guidance throughout the application process.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Acceptance Rate</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">85%</p>
                  <p className="text-sm text-muted-foreground">Merit Scholarships</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">40+</p>
                  <p className="text-sm text-muted-foreground">Partner Schools</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students in discussion"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="compact" title="Prepare for High School Success" description="Apply to our middle school program today!" />
    </Layout>
  );
};

export default MiddleSchool;
