import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    id: 1,
    title: "National Science Fair Winners Announced",
    excerpt: "Our students secured top positions at the 2024 National Science Fair, showcasing innovative projects.",
    date: "January 25, 2025",
    category: "Achievement",
    gradient: "from-purple-400 to-pink-500",
    categoryBg: "bg-purple-100",
    categoryText: "text-purple-700",
  },
  {
    id: 2,
    title: "New Computer Lab Inauguration",
    excerpt: "State-of-the-art computer laboratory opened to enhance digital literacy programs.",
    date: "January 20, 2025",
    category: "Facilities",
    gradient: "from-blue-400 to-cyan-500",
    categoryBg: "bg-blue-100",
    categoryText: "text-blue-700",
  },
  {
    id: 3,
    title: "Inter-School Sports Championship",
    excerpt: "Harar COMP hosts the regional inter-school sports championship this February.",
    date: "January 15, 2025",
    category: "Sports",
    gradient: "from-green-400 to-emerald-500",
    categoryBg: "bg-green-100",
    categoryText: "text-green-700",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              News & Announcements
            </h2>
          </div>
          <Link to="/news">
            <Button variant="outline" className="group border-primary/20 bg-white/50 hover:bg-white/80">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className={`group overflow-hidden border-0 bg-gradient-to-br ${item.gradient} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full ${item.categoryBg} ${item.categoryText} text-xs font-bold shadow-sm`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/90 text-xs font-semibold">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white/90 mb-3 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-sm font-bold text-white/90 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
