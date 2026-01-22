import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Now Enrolling for 2025-2026</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Young Minds{" "}
              <span className="relative">
                Flourish
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
            
            <p className="text-lg sm:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-xl">
              Experience personalized K-8 education in a nurturing microschool environment. 
              We cultivate curiosity, creativity, and confidence in every child.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  <Play className="w-5 h-5" />
                  Schedule a Tour
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold">8:1</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Student-Teacher Ratio</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold">15+</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold">98%</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Parent Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8 animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Students engaged in collaborative learning at Shores Academy microschool"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-64 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">100% Acceptance</p>
                    <p className="text-sm text-muted-foreground">to preferred schools</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
