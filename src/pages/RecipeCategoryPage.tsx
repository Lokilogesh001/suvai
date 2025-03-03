
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tag, Grid2X2, List, ChefHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample recipe data - in a real app, this would come from an API
const RECIPE_DATA = [
  {
    id: "1",
    title: "Pan-Seared Salmon with Lemon Butter",
    description: "Perfectly seared salmon fillets with a rich lemon butter sauce and fresh herbs.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 25,
    calories: 450,
    tags: ["Seafood", "Keto", "High Protein"],
    cuisine: "french",
    dietType: "non-vegetarian"
  },
  {
    id: "2",
    title: "Mediterranean Quinoa Bowl",
    description: "Nutritious quinoa topped with fresh vegetables, feta cheese, and a light vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 30,
    calories: 380,
    tags: ["Healthy", "Bowl"],
    cuisine: "mediterranean",
    dietType: "vegetarian"
  },
  {
    id: "3",
    title: "Classic Tiramisu",
    description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 240,
    calories: 420,
    tags: ["Dessert", "Italian", "No-Bake"],
    cuisine: "italian",
    dietType: "vegetarian"
  },
  {
    id: "4",
    title: "Spicy Thai Basil Chicken",
    description: "A quick and flavorful stir-fry with chicken, Thai basil, and plenty of chili for heat.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 20,
    calories: 410,
    tags: ["Asian", "Spicy", "Quick"],
    cuisine: "thai",
    dietType: "non-vegetarian"
  },
  {
    id: "5",
    title: "Avocado & Egg Breakfast Toast",
    description: "Creamy avocado spread on artisan toast topped with perfectly poached eggs.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 15,
    calories: 320,
    tags: ["Breakfast", "Vegetarian", "Quick"],
    cuisine: "american",
    dietType: "vegetarian"
  },
  {
    id: "6",
    title: "Butter Chicken",
    description: "Creamy and rich North Indian curry with tender chicken pieces in a tomato-based sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 40,
    calories: 550,
    tags: ["Indian", "Curry", "Spicy"],
    cuisine: "indian",
    dietType: "non-vegetarian"
  },
  {
    id: "7",
    title: "Vegetable Pad Thai",
    description: "Classic Thai noodle dish with fresh vegetables, eggs, and a tangy tamarind sauce.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 25,
    calories: 390,
    tags: ["Thai", "Noodles", "Stir-fry"],
    cuisine: "thai",
    dietType: "vegetarian"
  },
  {
    id: "8",
    title: "Beef Tacos",
    description: "Authentic Mexican tacos with seasoned ground beef, fresh salsa, and all the toppings.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 30,
    calories: 480,
    tags: ["Mexican", "Street Food", "Spicy"],
    cuisine: "mexican",
    dietType: "non-vegetarian"
  },
];

const cuisines = [
  { name: "All Cuisines", value: "all" },
  { name: "Italian", value: "italian" },
  { name: "Indian", value: "indian" },
  { name: "Chinese", value: "chinese" },
  { name: "Mexican", value: "mexican" },
  { name: "Thai", value: "thai" },
  { name: "Mediterranean", value: "mediterranean" },
  { name: "Japanese", value: "japanese" },
  { name: "French", value: "french" },
  { name: "American", value: "american" },
];

const RecipeCategoryPage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [dietType, setDietType] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredRecipes = RECIPE_DATA.filter((recipe) => {
    const cuisineMatch = selectedCuisine === "all" || recipe.cuisine === selectedCuisine;
    const dietMatch = dietType === "all" || recipe.dietType === dietType;
    return cuisineMatch && dietMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
              <ChefHat className="h-8 w-8" />
              Recipe Categories
            </h1>
            <p className="text-muted-foreground">
              Browse recipes by cuisine type and dietary preference
            </p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Cuisine Type
            </label>
            <Select 
              value={selectedCuisine} 
              onValueChange={setSelectedCuisine}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select cuisine type" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine.value} value={cuisine.value}>
                    {cuisine.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Diet Preference</label>
            <div className="flex gap-2">
              <Button 
                variant={dietType === "all" ? "default" : "outline"} 
                onClick={() => setDietType("all")}
                className="flex-1"
              >
                All
              </Button>
              <Button 
                variant={dietType === "vegetarian" ? "default" : "outline"} 
                onClick={() => setDietType("vegetarian")}
                className="flex-1"
              >
                Vegetarian
              </Button>
              <Button 
                variant={dietType === "non-vegetarian" ? "default" : "outline"} 
                onClick={() => setDietType("non-vegetarian")}
                className="flex-1"
              >
                Non-Vegetarian
              </Button>
            </div>
          </div>
        </div>
        
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to find more recipes
            </p>
          </div>
        ) : (
          <div className={`animate-fade-in ${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
          }`}>
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id}>
                {viewMode === "grid" ? (
                  <RecipeCard
                    id={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    image={recipe.image}
                    cookTime={recipe.cookTime}
                    calories={recipe.calories}
                    tags={recipe.tags}
                  />
                ) : (
                  <Link to={`/recipe/${recipe.id}`} className="block">
                    <div className="flex border rounded-xl overflow-hidden hover:shadow-md transition-all duration-200">
                      <div 
                        className="w-1/3 h-40"
                        style={{ 
                          backgroundImage: `url(${recipe.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {recipe.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {recipe.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                          <span>{recipe.cookTime} min</span>
                          <span>{recipe.calories} kcal</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCategoryPage;
