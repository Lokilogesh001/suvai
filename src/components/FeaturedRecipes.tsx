
import RecipeCard from "./RecipeCard";

// Sample data for demonstration
const FEATURED_RECIPES = [
  {
    id: "1",
    title: "Pan-Seared Salmon with Lemon Butter",
    description: "Perfectly seared salmon fillets with a rich lemon butter sauce and fresh herbs.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 25,
    calories: 450,
    tags: ["Seafood", "Keto", "High Protein"],
    isFeatured: true,
  },
  {
    id: "2",
    title: "Mediterranean Quinoa Bowl",
    description: "Nutritious quinoa topped with fresh vegetables, feta cheese, and a light vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 30,
    calories: 380,
    tags: ["Vegetarian", "Healthy", "Bowl"],
  },
  {
    id: "3",
    title: "Classic Tiramisu",
    description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 240,
    calories: 420,
    tags: ["Dessert", "Italian", "No-Bake"],
  },
  {
    id: "4",
    title: "Spicy Thai Basil Chicken",
    description: "A quick and flavorful stir-fry with chicken, Thai basil, and plenty of chili for heat.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 20,
    calories: 410,
    tags: ["Asian", "Spicy", "Quick"],
  },
  {
    id: "5",
    title: "Avocado & Egg Breakfast Toast",
    description: "Creamy avocado spread on artisan toast topped with perfectly poached eggs.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 15,
    calories: 320,
    tags: ["Breakfast", "Vegetarian", "Quick"],
  },
  {
    id: "6",
    title: "Japanese Miso Ramen",
    description: "Rich and savory miso broth with fresh ramen noodles, soft-boiled eggs, and tender pork belly.",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 45,
    calories: 520,
    tags: ["Japanese", "Soup", "Comfort Food"],
  },
  {
    id: "7",
    title: "Berry Açaí Bowl",
    description: "Refreshing smoothie bowl with açaí, mixed berries, banana, and crunchy granola topping.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 10,
    calories: 290,
    tags: ["Breakfast", "Vegan", "Healthy"],
  },
  {
    id: "8",
    title: "Mushroom Risotto",
    description: "Creamy Italian risotto with mixed wild mushrooms, white wine, and freshly grated Parmesan.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    cookTime: 35,
    calories: 480,
    tags: ["Italian", "Vegetarian", "Comfort Food"],
  },
];

const FeaturedRecipes = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_RECIPES.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            cookTime={recipe.cookTime}
            calories={recipe.calories}
            tags={recipe.tags}
            isFeatured={recipe.isFeatured}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
