import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const galleryImages = {
  campus: [
    { id: 1, title: "Main Building", alt: "School main building" },
    { id: 2, title: "Courtyard", alt: "School courtyard" },
    { id: 3, title: "Library", alt: "School library" },
    { id: 4, title: "Science Lab", alt: "Science laboratory" },
  ],
  activities: [
    { id: 5, title: "Sports Day", alt: "Annual sports day" },
    { id: 6, title: "Science Fair", alt: "Science fair exhibition" },
    { id: 7, title: "Cultural Event", alt: "Cultural celebration" },
    { id: 8, title: "Graduation", alt: "Graduation ceremony" },
  ],
  events: [
    { id: 9, title: "Award Ceremony", alt: "Student awards" },
    { id: 10, title: "Parent Meeting", alt: "Parent-teacher meeting" },
    { id: 11, title: "Independence Day", alt: "Independence day celebration" },
    { id: 12, title: "Alumni Meet", alt: "Alumni reunion" },
  ],
};

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Photo Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Life at Harar COMP
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Explore our campus, activities, and memorable moments through our photo gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container">
          <Tabs defaultValue="campus" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image) => (
                    <Card
                      key={image.id}
                      className="group overflow-hidden border-border/50 aspect-square cursor-pointer hover:shadow-lg transition-all"
                    >
                      <div className="w-full h-full bg-muted flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                        <span className="text-muted-foreground text-sm text-center p-4 z-10">
                          {image.title}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-primary-foreground font-medium">
                            {image.title}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Want to See More?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit our campus for a personal tour and experience the vibrant atmosphere 
            of Harar Senior Secondary School firsthand.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
