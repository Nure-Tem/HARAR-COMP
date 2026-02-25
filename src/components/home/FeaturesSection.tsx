import { GraduationCap, Users, Trophy, Globe, Microscope, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Rigorous curriculum aligned with national standards, preparing students for university and beyond.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Dedicated teachers with advanced degrees and years of experience in education.",
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description: "Comprehensive sports programs including football, basketball, athletics, and more.",
  },
  {
    icon: Microscope,
    title: "Modern Facilities",
    description: "State-of-the-art science labs, computer rooms, and library resources.",
  },
  {
    icon: Globe,
    title: "Cultural Heritage",
    description: "Celebrating our rich Ethiopian heritage while embracing global perspectives.",
  },
  {
    icon: Heart,
    title: "Student Welfare",
    description: "Comprehensive support services ensuring every student thrives academically and personally.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Education That Empowers
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover what makes Harar Senior Secondary School a leader in quality education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-white/40 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
