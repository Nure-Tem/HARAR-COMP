import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "News & Events", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],
  resources: [
    { name: "Student Portal", path: "/auth" },
    { name: "Staff Portal", path: "/auth" },
    { name: "Library", path: "#" },
    { name: "Calendar", path: "#" },
    { name: "Downloads", path: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-500 via-emerald-400 to-pink-500 text-white/90 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl">
                <GraduationCap className="h-8 w-8 text-white/90" />
              </div>
              <div>
                <h3 className="text-xl font-bold drop-shadow-md">Harar COMP</h3>
                <p className="text-sm text-white/90">Senior Secondary School</p>
              </div>
            </Link>
            <p className="text-sm text-white/95 mb-6 leading-relaxed font-medium">
              Empowering students with quality education since 1952. Building tomorrow's leaders through academic excellence and character development.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: "from-blue-500 to-blue-600" },
                { Icon: Twitter, color: "from-cyan-400 to-blue-500" },
                { Icon: Instagram, color: "from-pink-500 to-purple-600" },
                { Icon: Youtube, color: "from-red-500 to-red-600" }
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`h-12 w-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white/90" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4 drop-shadow-md">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/95 hover:text-yellow-200 transition-colors font-medium flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span className="text-yellow-300">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-xl mb-4 drop-shadow-md">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/95 hover:text-yellow-200 transition-colors font-medium flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    <span className="text-yellow-300">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-4 drop-shadow-md">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <MapPin className="h-5 w-5 mt-0.5 text-yellow-300 flex-shrink-0" />
                <span className="text-sm text-white/90 font-medium">
                  Harar City, Harari Regional State, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <Phone className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <div className="text-sm text-white/90 font-medium">
                  <div>+251 93 217 4683</div>
                  <div>+251 38 684 4412</div>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <Mail className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-sm text-white/90 font-medium">info@hararcomp.edu.et</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-white/30 bg-black/20 backdrop-blur-sm">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-sm text-white/90 font-semibold">
            © {new Date().getFullYear()} Harar Senior Secondary School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-white/90 hover:text-yellow-200 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-white/90 hover:text-yellow-200 transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
