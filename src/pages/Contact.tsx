import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Harar City, Near Jugol Gate", "Harari Regional State", "Ethiopia"],
    gradient: "from-blue-400 to-cyan-500",
    iconBg: "bg-blue-100",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+251 93 217 4683", "+251 38 684 4412"],
    gradient: "from-green-400 to-emerald-500",
    iconBg: "bg-green-100",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@hararcomp.edu.et", "admissions@hararcomp.edu.et"],
    gradient: "from-purple-400 to-pink-500",
    iconBg: "bg-purple-100",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
    gradient: "from-orange-400 to-red-500",
    iconBg: "bg-orange-100",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Have questions? We're here to help. Reach out to us through any of the 
              channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <Card key={i} className={`border-0 shadow-xl bg-gradient-to-br ${info.gradient} transform hover:scale-105 transition-transform`}>
                <CardContent className="p-6">
                  <div className={`h-14 w-14 rounded-full ${info.iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                    <info.icon className="h-7 w-7 text-white/90" />
                  </div>
                  <h3 className="font-bold text-white/90 text-lg mb-3 drop-shadow-md">{info.title}</h3>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-sm text-white/95 font-medium">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                📧 Send Us a Message
              </h2>
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                  <h3 className="text-2xl font-bold text-white/90">Contact Form</h3>
                  <p className="text-white/90 mt-2">We'll respond within 24-48 hours</p>
                </div>
                <CardContent className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-purple-900 font-bold">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="border-2 border-purple-300 focus:border-purple-500 bg-slate-50 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-purple-900 font-bold">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="border-2 border-purple-300 focus:border-purple-500 bg-slate-50 h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-purple-900 font-bold">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="border-2 border-purple-300 focus:border-purple-500 bg-slate-50 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-purple-900 font-bold">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="border-2 border-purple-300 focus:border-purple-500 bg-slate-50"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Find Us
              </h2>
              <Card className="border-border/50 overflow-hidden h-[400px] lg:h-full">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Harar Senior Secondary School
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Located in the heart of historic Harar City,<br />
                      near the famous Jugol Gate
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
