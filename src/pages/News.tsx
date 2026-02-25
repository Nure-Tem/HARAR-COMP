import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "National Science Fair Winners Announced",
    excerpt: "Our students secured top positions at the 2024 National Science Fair, showcasing innovative projects in renewable energy and agricultural technology.",
    date: "January 25, 2025",
    category: "Achievement",
    featured: true,
  },
  {
    id: 2,
    title: "New Computer Lab Inauguration",
    excerpt: "State-of-the-art computer laboratory opened to enhance digital literacy programs for all students.",
    date: "January 20, 2025",
    category: "Facilities",
    featured: false,
  },
  {
    id: 3,
    title: "Inter-School Sports Championship",
    excerpt: "Harar COMP hosts the regional inter-school sports championship this February. All students are encouraged to participate.",
    date: "January 15, 2025",
    category: "Sports",
    featured: false,
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting Scheduled",
    excerpt: "Annual parent-teacher conference will be held on February 10th. Parents are requested to attend.",
    date: "January 10, 2025",
    category: "Announcement",
    featured: false,
  },
  {
    id: 5,
    title: "Library Expansion Complete",
    excerpt: "Our school library has been expanded with over 2,000 new books covering various subjects.",
    date: "January 5, 2025",
    category: "Facilities",
    featured: false,
  },
  {
    id: 6,
    title: "Cultural Festival 2025",
    excerpt: "Annual cultural festival celebrating Ethiopian heritage will take place in March.",
    date: "December 28, 2024",
    category: "Events",
    featured: false,
  },
];

const News = () => {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              News & Events
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Stay updated with the latest happenings at Harar Senior Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 bg-background border-b border-border">
          <div className="container">
            <Card className="overflow-hidden border-secondary/30 bg-secondary/5">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    Featured
                  </span>
                  <span className="px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium">
                    {featuredNews.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {featuredNews.date}
                  </div>
                  <Link
                    to={`/news/${featuredNews.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Recent News
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((item) => (
              <Card key={item.id} className="group border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
