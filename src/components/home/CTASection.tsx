import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Experienced and qualified teachers",
  "Modern learning facilities",
  "Comprehensive curriculum",
  "Strong community values",
];

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-white/90 text-sm font-bold mb-4 shadow-lg border-2 border-white/50">
              🎓 Start Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white/90 mb-6 drop-shadow-lg">
              Ready to Join Our Community?
            </h2>
            <p className="text-white/95 text-lg mb-8 leading-relaxed font-medium">
              Applications are now open for the upcoming academic year. Take the first 
              step towards a brighter future at Harar Senior Secondary School.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300 flex-shrink-0 drop-shadow-md" />
                  <span className="text-white/90 font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white/90 font-bold hover:from-yellow-500 hover:to-orange-600 shadow-xl hover:shadow-2xl transform hover:scale-105 h-14 px-8 text-lg">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/80 text-white/90 hover:bg-white/20 backdrop-blur-sm font-bold h-14 px-8 text-lg shadow-lg">
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/40 shadow-2xl">
              <h3 className="text-2xl font-bold text-white/90 mb-6 drop-shadow-md">
                📅 Admission Deadlines
              </h3>
              <div className="space-y-4">
                {[
                  { round: "Early Admission", date: "March 15, 2025" },
                  { round: "Regular Admission", date: "May 30, 2025" },
                  { round: "Late Admission", date: "July 15, 2025" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 px-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 shadow-md">
                    <span className="text-white/90 font-semibold">{item.round}</span>
                    <span className="text-yellow-300 font-bold text-lg">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
