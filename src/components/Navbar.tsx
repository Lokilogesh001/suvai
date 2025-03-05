
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChefHat, User, LogIn, LogOut } from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

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

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account."
    });
    navigate("/");
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
              
              {isLoaded && isSignedIn ? (
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full"
                    asChild
                  >
                    <Link to="/profile">
                      {user.imageUrl ? (
                        <img 
                          src={user.imageUrl} 
                          alt={user.fullName || "Profile"} 
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <User className="h-5 w-5" />
                      )}
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleSignOut}
                    className="font-medium"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {t("profile.logout")}
                  </Button>
                </div>
              ) : (
                <Button variant="default" size="sm" className="font-medium" asChild>
                  <Link to="/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    {t("nav.signin")}
                  </Link>
                </Button>
              )}
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
              
              {isLoaded && isSignedIn ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="font-medium"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {t("profile.logout")}
                </Button>
              ) : (
                <Link
                  to="/login"
                  className={`${isActive("/login")} py-2 transition-default font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.signin")}
                </Link>
              )}
            </nav>
            <div className="flex items-center justify-between">
              {!isSignedIn && (
                <Button className="w-3/4 mr-2" size="sm" asChild>
                  <Link to="/login">
                    {t("nav.signin")}
                  </Link>
                </Button>
              )}
              <LanguageSelector variant="minimal" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
