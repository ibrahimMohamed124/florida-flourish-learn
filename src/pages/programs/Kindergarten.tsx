import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Palette, BookOpen, Users, Sun, Music } from "lucide-react";

const highlights = [
  { icon: Heart, title: "Nurturing Environment", description: "Small class sizes create a warm, supportive atmosphere" },
  { icon: Palette, title: "Creative Expression", description: "Daily art, music, and imaginative play activities" },
  { icon: BookOpen, title: "Early Literacy", description: "Phonics-based reading instruction and storytelling" },
  { icon: Users, title: "Social Skills", description: "Building friendships and learning to collaborate" },
  { icon: Sun, title: "Outdoor Learning", description: "Florida sunshine fuels exploration and discovery" },
  { icon: Music, title: "Movement & Music", description: "Songs, dance, and physical activity throughout the day" },
];

const schedule = [
  { time: "8:00 AM", activity: "Arrival & Morning Meeting" },
  { time: "8:30 AM", activity: "Literacy Block" },
  { time: "9:30 AM", activity: "Snack & Outdoor Play" },
  { time: "10:00 AM", activity: "Math & Discovery" },
  { time: "11:00 AM", activity: "Specials (Art/Music/PE)" },
  { time: "12:00 PM", activity: "Lunch" },
  { time: "12:45 PM", activity: "Rest & Story Time" },
  { time: "1:30 PM", activity: "Centers & Exploration" },
  { time: "2:30 PM", activity: "Outdoor Play" },
  { time: "3:00 PM", activity: "Dismissal" },
];

const Kindergarten = () => {
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                Ages 5-6
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Kindergarten Program
              </h1>
              <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8">
                A joyful introduction to formal learning where curiosity leads the way. 
                Our kindergarten program builds the foundation for lifelong academic success 
                through play-based, hands-on experiences.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kindergarten students learning"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            What Makes Our Kindergarten Special
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
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

      {/* Sample Schedule */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                A Day in Kindergarten
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Sample Daily Schedule
              </h2>
              <p className="text-muted-foreground mb-8">
                Our balanced schedule includes structured learning, free play, outdoor time, 
                and rest—all designed to meet the developmental needs of young learners.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.time} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                    <span className="text-sm font-medium text-primary w-20">{item.time}</span>
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="compact" title="Ready to Enroll?" description="Spaces are limited. Apply today!" />
    </Layout>
  );
};

export default Kindergarten;
