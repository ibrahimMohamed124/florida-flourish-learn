import { Users, BookOpen, Lightbulb, Heart, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "With an 8:1 student-teacher ratio, every child receives personalized attention and support.",
  },
  {
    icon: BookOpen,
    title: "Rigorous Curriculum",
    description: "Our standards-exceed curriculum challenges students while fostering a love for learning.",
  },
  {
    icon: Lightbulb,
    title: "Project-Based Learning",
    description: "Students tackle real-world problems, developing critical thinking and collaboration skills.",
  },
  {
    icon: Heart,
    title: "Social-Emotional Growth",
    description: "We nurture the whole child, building emotional intelligence and strong character.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Students explore diverse cultures and ideas, preparing them for an interconnected world.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Our graduates consistently excel in high school admissions and beyond.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Shores Academy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education Designed for{" "}
            <span className="text-primary">Every Child</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe every child is unique. Our approach combines academic excellence 
            with personalized support to help each student thrive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
