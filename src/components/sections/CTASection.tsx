import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";

interface CTASectionProps {
  variant?: "default" | "compact";
  title?: string;
  description?: string;
}

const CTASection = ({ 
  variant = "default",
  title = "Ready to Begin Your Child's Journey?",
  description = "Take the first step toward an exceptional education. Schedule a tour or start your application today."
}: CTASectionProps) => {
  if (variant === "compact") {
    return (
      <section className="bg-accent/5 border-y border-accent/10">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button variant="outline" asChild>
                <Link to="/contact">
                  <Calendar className="w-4 h-4" />
                  Schedule Tour
                </Link>
              </Button>
              <Button variant="cta" asChild>
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container-wide mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-card shadow-elevated">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/apply">
                  <FileText className="w-5 h-5" />
                  Start Application
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">
                  <Calendar className="w-5 h-5" />
                  Schedule a Tour
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Questions? Call us at{" "}
              <a href="tel:+13055551234" className="text-primary font-medium hover:underline">
                (305) 555-1234
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
