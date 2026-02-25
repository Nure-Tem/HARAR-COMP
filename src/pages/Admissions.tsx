import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar, CheckCircle, Users, Clock, CreditCard } from "lucide-react";

const requirements = [
  "Completed Grade 8 with passing grades",
  "Birth certificate or age verification",
  "Transfer certificate from previous school",
  "Four passport-size photographs",
  "Parent/Guardian identification",
  "Medical fitness certificate",
];

const steps = [
  {
    step: 1,
    title: "Create Account",
    description: "Register on our portal to start your application.",
  },
  {
    step: 2,
    title: "Fill Application",
    description: "Complete the online application form with accurate information.",
  },
  {
    step: 3,
    title: "Upload Documents",
    description: "Submit required documents including transcripts and photos.",
  },
  {
    step: 4,
    title: "Pay Application Fee",
    description: "Complete the payment of the application processing fee.",
  },
  {
    step: 5,
    title: "Await Decision",
    description: "Our admissions team will review and notify you of the decision.",
  },
];

const Admissions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Join Our Community
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Admissions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Begin your journey to academic excellence. Applications are now open 
              for the upcoming academic year.
            </p>
            <Link to="/auth?mode=register">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 bg-secondary/10 border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Early Admission", date: "March 15, 2025", icon: Calendar },
              { title: "Regular Deadline", date: "May 30, 2025", icon: Clock },
              { title: "Classes Begin", date: "September 1, 2025", icon: Users },
            ].map((item, i) => (
              <Card key={i} className="border-secondary/20 bg-background">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                    <div className="text-lg font-semibold text-foreground">{item.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your application.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {steps.map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="relative z-10 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <Card className="flex-1 border-border/50">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Requirements
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                What You'll Need
              </h2>
              <p className="text-muted-foreground mb-8">
                Please ensure you have all required documents ready before starting 
                your application to avoid delays.
              </p>

              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Application Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Application Fee</span>
                      <span className="font-semibold text-foreground">ETB 200</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Registration Fee</span>
                      <span className="font-semibold text-foreground">ETB 500</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Annual Tuition</span>
                      <span className="font-semibold text-foreground">ETB 2,500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our admissions team is here to assist you with any questions 
                    about the application process.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Admissions Office
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Apply?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Start your application today.
          </p>
          <Link to="/auth?mode=register">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
