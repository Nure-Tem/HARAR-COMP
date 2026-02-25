import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  LogOut, 
  BookOpen, 
  Calendar, 
  FileText, 
  Bell,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </Layout>
    );
  }

  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Student";

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <User className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-primary-foreground">
                  Welcome, {userName}!
                </h1>
                <p className="text-primary-foreground/70">{user?.email}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-fit"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 bg-background">
        <div className="container">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Registration Status", value: "Pending", icon: Clock, color: "bg-warning/10 text-warning" },
              { label: "Current Grade", value: "Grade 9", icon: BookOpen, color: "bg-primary/10 text-primary" },
              { label: "Attendance", value: "95%", icon: CheckCircle, color: "bg-accent/10 text-accent" },
              { label: "Notifications", value: "3", icon: Bell, color: "bg-secondary/10 text-secondary" },
            ].map((stat, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-4">
                  <div className={`h-10 w-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Registration Status */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Registration Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
                    <AlertCircle className="h-6 w-6 text-warning" />
                    <div>
                      <p className="font-medium text-foreground">Application Under Review</p>
                      <p className="text-sm text-muted-foreground">
                        Your registration is being reviewed by the admissions office. You will be notified once a decision is made.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-foreground mb-4">Submitted Documents</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Birth Certificate", status: "verified" },
                        { name: "Previous School Transcript", status: "pending" },
                        { name: "Passport Photo", status: "verified" },
                        { name: "Medical Certificate", status: "missing" },
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-foreground">{doc.name}</span>
                          <Badge
                            variant={
                              doc.status === "verified"
                                ? "default"
                                : doc.status === "pending"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {doc.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: "Feb 10", title: "Parent-Teacher Meeting", time: "10:00 AM" },
                      { date: "Feb 15", title: "Science Fair Registration", time: "All Day" },
                      { date: "Mar 1", title: "Mid-Term Exams Begin", time: "8:00 AM" },
                    ].map((event, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="text-center p-2 rounded-lg bg-muted min-w-[60px]">
                          <div className="text-xs text-muted-foreground">
                            {event.date.split(" ")[0]}
                          </div>
                          <div className="font-bold text-foreground">
                            {event.date.split(" ")[1]}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{event.title}</div>
                          <div className="text-sm text-muted-foreground">{event.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Full Name</div>
                      <div className="font-medium text-foreground">{userName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">{user?.email}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Student ID</div>
                      <div className="font-medium text-foreground">HSSS-2025-{user?.id?.slice(0, 4).toUpperCase()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Account Created</div>
                      <div className="font-medium text-foreground">
                        {new Date(user?.created_at || "").toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Upload Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
