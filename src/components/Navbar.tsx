
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ChefHat, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="content-grid">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-semibold transition-opacity hover:opacity-90"
          >
            <ChefHat className="h-8 w-8" />
            <span className="text-gradient">{t("app.name")}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex space-x-6">
              <Link
                to="/"
                className={`${isActive("/")} transition-default font-medium`}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/recipes"
                className={`${isActive("/recipes")} transition-default font-medium`}
              >
                {t("nav.recipes")}
              </Link>
              <Link
                to="/chatbot"
                className={`${isActive("/chatbot")} transition-default font-medium`}
              >
                {t("nav.assistant")}
              </Link>
              <Link
                to="/meal-planner"
                className={`${isActive("/meal-planner")} transition-default font-medium`}
              >
                {t("nav.meal-planner")}
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <div className="relative">
                <SearchBar />
              </div>
              <LanguageSelector variant="minimal" />
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                asChild
              >
                <Link to="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="default" size="sm" className="font-medium">
                {t("nav.signin")}
              </Button>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg animate-slide-down">
          <div className="p-4 space-y-4">
            <SearchBar />
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`${isActive("/")} py-2 transition-default font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/recipes"
                className={`${isActive("/recipes")} py-2 transition-default font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.recipes")}
              </Link>
              <Link
                to="/chatbot"
                className={`${isActive("/chatbot")} py-2 transition-default font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.assistant")}
              </Link>
              <Link
                to="/meal-planner"
                className={`${isActive("/meal-planner")} py-2 transition-default font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.meal-planner")}
              </Link>
              <Link
                to="/profile"
                className={`${isActive("/profile")} py-2 transition-default font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.profile")}
              </Link>
            </nav>
            <div className="flex items-center justify-between">
              <Button className="w-3/4 mr-2" size="sm">
                {t("nav.signin")}
              </Button>
              <LanguageSelector variant="minimal" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
