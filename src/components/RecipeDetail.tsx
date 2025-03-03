
import { useState } from "react";
import { 
  Clock, 
  Users, 
  ChefHat, 
  Flame, 
  Share2, 
  Bookmark, 
  Star, 
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import VoiceGuide from "./VoiceGuide";

interface Ingredient {
  name: string;
  amount: string;
}

interface RecipeDetailProps {
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  difficulty: string;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  author: {
    name: string;
    image: string;
  };
}

const RecipeDetail = ({
  title,
  description,
  image,
  prepTime,
  cookTime,
  servings,
  calories,
  difficulty,
  tags,
  ingredients,
  steps,
  author,
}: RecipeDetailProps) => {
  const [savedRecipe, setSavedRecipe] = useState(false);
  
  const toggleSave = () => {
    setSavedRecipe(!savedRecipe);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden mb-8 animate-fade-in">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/20 text-white hover:bg-white/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {title}
          </h1>
          
          <p className="text-white/80 text-lg mb-4 max-w-3xl">
            {description}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img 
                src={author.image} 
                alt={author.name} 
                className="w-10 h-10 rounded-full border-2 border-white mr-2"
              />
              <span className="text-white">{author.name}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Prep Time</div>
                <div className="font-medium">{prepTime} min</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <ChefHat className="h-5 w-5 mr-2 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Cook Time</div>
                <div className="font-medium">{cookTime} min</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Servings</div>
                <div className="font-medium">{servings}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Flame className="h-5 w-5 mr-2 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Calories</div>
                <div className="font-medium">{calories} kcal</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={toggleSave}
            >
              <Bookmark 
                className={`h-4 w-4 ${savedRecipe ? "fill-primary" : ""}`} 
              />
              {savedRecipe ? "Saved" : "Save"}
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">{ingredient.amount}</span>
                  <span>{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div 
                    className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary"
                  >
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Rate this recipe</h2>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="h-6 w-6 text-muted cursor-pointer hover:text-yellow-400 transition-default"
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <VoiceGuide steps={steps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
