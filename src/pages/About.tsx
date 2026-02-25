import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Users, BookOpen, Calendar } from "lucide-react";

const stats = [
  { value: "1952", label: "Established" },
  { value: "2,500+", label: "Students" },
  { value: "150+", label: "Staff" },
  { value: "70+", label: "Years of Excellence" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Building character through honesty and ethical behavior.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Embracing new ideas and methods to enhance learning.",
  },
  {
    icon: Calendar,
    title: "Community",
    description: "Fostering a supportive and inclusive environment for all.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Our Story & Legacy
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Founded in 1952, Harar Senior Secondary School has been a cornerstone of 
              education in the Harari Region, shaping generations of leaders and scholars.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our History
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Seven Decades of Educational Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Harar Senior Secondary School, locally known as Harar COMP, was established 
                  in 1952 as one of the first modern secondary schools in eastern Ethiopia. 
                  Located in the ancient walled city of Harar, a UNESCO World Heritage Site, 
                  our school has been instrumental in providing quality education to the youth 
                  of the region.
                </p>
                <p>
                  Over the decades, we have produced countless graduates who have gone on to 
                  become doctors, engineers, teachers, politicians, and leaders in various 
                  fields. Our alumni network spans across Ethiopia and around the world.
                </p>
                <p>
                  Today, we continue our mission of academic excellence while embracing modern 
                  teaching methodologies and technology, preparing our students for the 
                  challenges of the 21st century.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                {[
                  { year: "1952", event: "School founded by Ethiopian Ministry of Education" },
                  { year: "1974", event: "Expanded to include science laboratories" },
                  { year: "1991", event: "Library and resource center established" },
                  { year: "2010", event: "Computer lab and digital learning introduced" },
                  { year: "2024", event: "Modern facilities and campus renovation" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-secondary font-bold">{item.year}</div>
                    <div className="text-foreground">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To provide quality education that develops the intellectual, moral, and 
                  social potential of every student, preparing them to be responsible 
                  citizens and lifelong learners who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading educational institution in Ethiopia, recognized for 
                  academic excellence, innovation in teaching, and the development of 
                  well-rounded individuals who are prepared for global challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Guiding Principles
            </h2>
            <p className="text-muted-foreground">
              The core values that shape our educational philosophy and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
