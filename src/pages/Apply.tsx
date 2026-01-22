import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, FileText } from "lucide-react";

const Apply = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Florida",
    zip: "",
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    currentGrade: "",
    currentSchool: "",
    applyingFor: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.parentFirstName || !formData.email || !formData.studentFirstName || !formData.applyingFor) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding bg-background min-h-[70vh] flex items-center">
          <div className="container-narrow mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Application Submitted!
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Thank you for applying to Shores Academy. Our admissions team will review 
              your application and contact you within 3-5 business days to discuss next steps.
            </p>
            <p className="text-muted-foreground mb-8">
              A confirmation email has been sent to <strong>{formData.email}</strong>
            </p>
            <Button asChild>
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-4">
              <FileText className="w-4 h-4" />
              <span>Application Form</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              Apply to Shores Academy
            </h1>
            <p className="text-lg text-primary-foreground/85">
              Complete the form below to begin your child's application. Required fields are marked with *.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 sm:w-24 h-1 mx-2 rounded transition-colors ${
                      step > s ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Parent Info */}
            {step === 1 && (
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft animate-fade-in">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Parent/Guardian Information
                </h2>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        value={formData.parentFirstName}
                        onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                        placeholder="First name"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        value={formData.parentLastName}
                        onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
                        placeholder="Last name"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email address"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(305) 555-1234"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Street Address
                    </label>
                    <Input
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main St"
                      className="h-12"
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="col-span-2 sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City
                      </label>
                      <Input
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Miami"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        State
                      </label>
                      <Input
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="FL"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ZIP
                      </label>
                      <Input
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        placeholder="33139"
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <Button type="button" onClick={() => setStep(2)}>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Student Info */}
            {step === 2 && (
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft animate-fade-in">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Student Information
                </h2>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Student First Name *
                      </label>
                      <Input
                        value={formData.studentFirstName}
                        onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
                        placeholder="First name"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Student Last Name *
                      </label>
                      <Input
                        value={formData.studentLastName}
                        onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
                        placeholder="Last name"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Date of Birth
                      </label>
                      <Input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Applying For Grade *
                      </label>
                      <Input
                        value={formData.applyingFor}
                        onChange={(e) => setFormData({ ...formData, applyingFor: e.target.value })}
                        placeholder="e.g., Kindergarten, 3rd Grade"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Grade
                      </label>
                      <Input
                        value={formData.currentGrade}
                        onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                        placeholder="Current grade level"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current School
                      </label>
                      <Input
                        value={formData.currentSchool}
                        onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                        placeholder="School name"
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)}>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Info & Submit */}
            {step === 3 && (
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft animate-fade-in">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Additional Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Is there anything else you'd like us to know?
                    </label>
                    <Textarea
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      placeholder="Share any additional information about your child's interests, learning style, or special needs..."
                      rows={5}
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-muted">
                    <p className="text-sm text-muted-foreground">
                      By submitting this application, you agree to be contacted by Shores Academy 
                      regarding your child's enrollment. Additional documentation may be required 
                      as part of the admissions process.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
