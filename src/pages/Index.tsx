import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Globe, BookOpen, Utensils, Users, ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const categories = [
  "All Recipes",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Keto",
  "Quick Meals",
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All Recipes");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.5) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRecipes = () => {
    const recipesSection = document.getElementById("recipes");
    recipesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - More Compact */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
            alt="Beautiful plated food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div 
          className={`container relative z-10 px-4 max-w-4xl text-center transform transition-all duration-1000 ${
            isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <Badge 
            variant="outline" 
            className="mb-4 py-1.5 px-6 bg-white/10 backdrop-blur text-white border-white/20 text-sm font-medium mx-auto"
          >
            AI-Powered Cooking Assistant
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Personal <span className="text-gradient bg-gradient-to-r from-blue-400 to-violet-400">AI Chef</span> for Exceptional Meals
          </h1>
          
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Discover perfectly tailored recipes with AI-powered cooking assistance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full font-medium">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full bg-white/10 text-white border-white/20 backdrop-blur hover:bg-white/20 font-medium"
              onClick={scrollToRecipes}
            >
              View Recipes
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Famous Recipes Section */}
      <section id="recipes" className="section-padding bg-secondary/30 py-16">
        <div className="content-grid">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 animate-fade-in">
            <div>
              <Badge className="mb-2" variant="outline">
                Famous Recipes
              </Badge>
              <h2 className="text-3xl font-bold">Chef's Recommendations</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Our most popular and highly rated recipes from around the world
              </p>
            </div>
            
            <Button variant="ghost" className="mt-4 md:mt-0">
              View All Recipes
            </Button>
          </div>
          
          <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar animate-fade-in">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="rounded-full whitespace-nowrap"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <FeaturedRecipes />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-background py-12">
        <div className="content-grid">
          <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden animate-scale-in">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your cooking experience?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mb-6">
                Join suvAI today and discover a new world of AI-powered cooking assistance.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:text-primary rounded-full font-medium"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="content-grid">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ChefHat className="h-8 w-8" />
              <span className="text-2xl font-semibold text-gradient">suvAI</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-default">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-default">
                Features
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-default">
                Recipes
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-default">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-default">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-default">
                Terms
              </a>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} suvAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
