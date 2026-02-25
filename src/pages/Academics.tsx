import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FlaskConical, Calculator, Globe, Palette, Dumbbell } from "lucide-react";

const departments = [
  {
    id: "natural",
    name: "Natural Sciences",
    icon: FlaskConical,
    description: "Comprehensive science education including Biology, Chemistry, and Physics.",
    subjects: ["Biology", "Chemistry", "Physics", "Mathematics", "English", "Civics"],
  },
  {
    id: "social",
    name: "Social Sciences",
    icon: Globe,
    description: "Understanding society through History, Geography, and Economics.",
    subjects: ["History", "Geography", "Economics", "Civics", "English", "Mathematics"],
  },
];

const facilities = [
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description: "Fully equipped physics, chemistry, and biology labs for hands-on experiments.",
  },
  {
    icon: Calculator,
    title: "Computer Lab",
    description: "Modern computer facilities with internet access for digital learning.",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Extensive collection of textbooks, reference materials, and periodicals.",
  },
  {
    icon: Palette,
    title: "Art & Music Room",
    description: "Dedicated spaces for creative expression and cultural activities.",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description: "Football field, basketball court, and athletics track.",
  },
  {
    icon: Globe,
    title: "Language Lab",
    description: "Modern facilities for English and foreign language learning.",
  },
];

const Academics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Academic Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Excellence in Learning
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our comprehensive curriculum prepares students for university education 
              and successful careers through rigorous academic programs.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Curriculum
            </h2>
            <p className="text-muted-foreground">
              Following the Ethiopian national curriculum, we offer specialized streams 
              for Grades 9-12 to prepare students for university entrance examinations.
            </p>
          </div>

          <Tabs defaultValue="natural" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="natural">Natural Sciences</TabsTrigger>
              <TabsTrigger value="social">Social Sciences</TabsTrigger>
            </TabsList>

            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id}>
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <dept.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{dept.name}</CardTitle>
                        <p className="text-muted-foreground mt-1">{dept.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-foreground mb-4">Core Subjects:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {dept.subjects.map((subject, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                        >
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Grade Levels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer secondary education for Grades 9 through 12, with specialized 
              tracks beginning in Grade 11.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { grade: "Grade 9", focus: "Foundation Year", description: "General education with introduction to all subjects" },
              { grade: "Grade 10", focus: "Transition Year", description: "Preparation for national examination and stream selection" },
              { grade: "Grade 11", focus: "Specialization", description: "Stream-specific curriculum in Natural or Social Sciences" },
              { grade: "Grade 12", focus: "Preparation Year", description: "Intensive preparation for university entrance examination" },
            ].map((level, i) => (
              <Card key={i} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{level.grade}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{level.focus}</div>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Learning Environment
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern facilities designed to enhance the learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => (
              <Card key={i} className="border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <facility.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
