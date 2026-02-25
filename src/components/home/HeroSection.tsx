import { Link } from "react-router-dom";
import { ArrowRight, Play, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Harar Senior Secondary School Campus"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Dark gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-orange-300 shadow-lg mb-6 animate-fade-up">
            <Award className="h-4 w-4 text-white/90" />
            <span className="text-sm font-bold text-white/90">
              Excellence Since 1952
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Shaping Tomorrow's
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Leaders Today</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Welcome to Harar Senior Secondary School — where tradition meets innovation. 
            We nurture curious minds and build character through quality education in the 
            heart of Ethiopia's historic city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white/90 font-bold hover:from-yellow-500 hover:to-orange-600 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-pink-400 text-white/90 bg-pink-500/20 hover:bg-pink-500/40 backdrop-blur-sm shadow-lg">
                <Play className="mr-2 h-5 w-5 text-pink-300" />
                Virtual Tour
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Users, value: "2,500+", label: "Students", color: "from-blue-400 to-cyan-400", iconColor: "text-cyan-300" },
              { icon: BookOpen, value: "50+", label: "Programs", color: "from-green-400 to-emerald-400", iconColor: "text-emerald-300" },
              { icon: Award, value: "70+", label: "Years Legacy", color: "from-purple-400 to-pink-400", iconColor: "text-pink-300" },
            ].map((stat, i) => (
              <div key={i} className={`text-center md:text-left bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-20`}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className={`h-6 w-6 ${stat.iconColor} hidden md:block`} />
                  <span className="text-2xl md:text-3xl font-bold text-white/90 drop-shadow-lg">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-white/90 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  );
}
