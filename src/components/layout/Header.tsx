import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "News", path: "/news" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-secondary bg-gradient-to-r from-primary via-purple-600 to-secondary backdrop-blur shadow-lg">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-12">
            <GraduationCap className="h-7 w-7 text-white/90" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight text-white/90 drop-shadow-md">Harar COMP</h1>
            <p className="text-xs text-yellow-200">Senior Secondary School</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 text-sm font-semibold transition-all rounded-lg",
                location.pathname === item.path
                  ? "bg-slate-50 text-primary shadow-md scale-105"
                  : "text-white/90 hover:bg-white/20 hover:scale-105"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/auth">
            <Button variant="ghost" size="sm" className="text-white/90 border-2 border-white/50 hover:bg-white/20 hover:border-white/80">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white/90 font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white/90" />
          ) : (
            <Menu className="h-6 w-6 text-white/90" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-white/30 bg-gradient-to-b from-primary to-purple-700 animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                  location.pathname === item.path
                    ? "bg-slate-50 text-primary shadow-md"
                    : "text-white/90 hover:bg-white/20"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t-2 border-white/30 mt-4 pt-4 flex flex-col gap-2">
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-2 border-white/80 text-white/90 hover:bg-white/20">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white/90 font-bold">
                  Apply Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
