import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Kindergarten",
    ages: "Ages 5-6",
    description: "A joyful introduction to learning through play, exploration, and foundational skills development.",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    path: "/programs/kindergarten",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Elementary School",
    ages: "Grades 1-5",
    description: "Building strong academic foundations while nurturing creativity and critical thinking skills.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    path: "/programs/elementary",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Middle School",
    ages: "Grades 6-8",
    description: "Preparing students for high school success through rigorous academics and leadership development.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    path: "/programs/middle-school",
    color: "bg-secondary/10 text-secondary",
  },
];

const ProgramsPreview = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Programs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Programs for Every Stage
            </h2>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link to="/programs">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              to={program.path}
              className="group block rounded-2xl overflow-hidden bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${program.color}`}>
                    {program.ages}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
