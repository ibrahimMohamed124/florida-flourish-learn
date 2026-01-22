import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Calendar, FileText, MessageCircle, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Inquire",
    description: "Reach out to learn more about our programs and schedule a tour of our campus.",
  },
  {
    icon: Calendar,
    step: "2",
    title: "Visit",
    description: "Tour our facilities, meet our teachers, and experience our community firsthand.",
  },
  {
    icon: FileText,
    step: "3",
    title: "Apply",
    description: "Complete our online application and submit required documents.",
  },
  {
    icon: ClipboardList,
    step: "4",
    title: "Assessment",
    description: "Schedule a student assessment to help us understand your child's needs.",
  },
];

const tuition = [
  { program: "Kindergarten", price: "$15,900", note: "Full day program" },
  { program: "Elementary (1-5)", price: "$17,500", note: "Per year" },
  { program: "Middle School (6-8)", price: "$19,200", note: "Per year" },
];

const faqs = [
  {
    question: "What is the application deadline?",
    answer: "We accept applications on a rolling basis, but we encourage families to apply early as spaces are limited. Priority deadline for fall enrollment is March 1st.",
  },
  {
    question: "Do you offer financial aid?",
    answer: "Yes, we offer need-based financial aid to qualifying families. Approximately 25% of our students receive some form of financial assistance.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain an 8:1 student-teacher ratio to ensure personalized attention for every child.",
  },
  {
    question: "Do you provide transportation?",
    answer: "We offer bus service to select areas in Miami-Dade County. Please contact our admissions office for routes and availability.",
  },
];

const Admissions = () => {
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
              Admissions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Join Our{" "}
              <span className="relative">
                Community
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
            <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8">
              We welcome families who share our commitment to academic excellence and 
              character development. Begin your journey with Shores Academy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply">
                  Start Application
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              How to Apply
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple Admissions Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Our admissions process is designed to be straightforward while helping us 
              understand each family's needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 w-5 h-5 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Tuition & Fees
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Investment in Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our tuition reflects the personalized attention, small class sizes, and 
                exceptional resources we provide to every student.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Financial aid available for qualifying families
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Flexible payment plans offered
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Sibling discounts available
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              {tuition.map((item) => (
                <div
                  key={item.program}
                  className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">{item.program}</h3>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  <p className="font-serif text-2xl font-bold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Admissions;
