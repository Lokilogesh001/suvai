
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RecipeDetail from "@/components/RecipeDetail";

// Sample recipe data for demonstration
const sampleRecipe = {
  id: "1",
  title: "Pan-Seared Salmon with Lemon Butter",
  description: "Perfectly seared salmon fillets with a rich lemon butter sauce, flavored with garlic and fresh herbs for a restaurant-quality meal at home.",
  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  prepTime: 10,
  cookTime: 15,
  servings: 4,
  calories: 450,
  difficulty: "Medium",
  tags: ["Seafood", "Keto", "High Protein", "Dinner"],
  ingredients: [
    { name: "salmon fillets", amount: "4 (6oz)" },
    { name: "salt", amount: "1 tsp" },
    { name: "black pepper", amount: "½ tsp" },
    { name: "olive oil", amount: "2 tbsp" },
    { name: "unsalted butter", amount: "3 tbsp" },
    { name: "garlic cloves, minced", amount: "3" },
    { name: "lemon, juiced", amount: "1" },
    { name: "fresh dill, chopped", amount: "2 tbsp" },
    { name: "lemon wedges", amount: "for serving" },
  ],
  steps: [
    "Pat the salmon fillets dry with a paper towel. Season both sides with salt and black pepper.",
    "Heat olive oil in a large skillet over medium-high heat until shimmering.",
    "Add the salmon to the skillet, skin-side down (if applicable). Cook for 4-5 minutes without moving to get a crispy skin.",
    "Flip the salmon and cook for an additional 3-4 minutes, or until it reaches your desired level of doneness.",
    "Reduce heat to medium-low. Add butter and garlic to the pan and let the butter melt.",
    "Spoon the garlic butter over the salmon repeatedly for about 1 minute.",
    "Add lemon juice and sprinkle with fresh dill.",
    "Remove from heat and let rest for 1-2 minutes.",
    "Serve with lemon wedges and additional fresh herbs if desired.",
  ],
  author: {
    name: "Chef Michael",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200",
  },
  nutritionalInfo: {
    calories: 450,
    protein: 35,
    carbs: 3,
    fat: 32,
    fiber: 1,
    sugar: 0
  }
};

const RecipePage = () => {
  const { id } = useParams();
  
  // In a real app, you'd fetch the recipe data based on the ID
  console.log("Recipe ID:", id);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <RecipeDetail {...sampleRecipe} />
      </main>
    </div>
  );
};

export default RecipePage;
