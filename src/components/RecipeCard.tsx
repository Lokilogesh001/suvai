
import { Clock, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  calories: number;
  tags: string[];
  isFeatured?: boolean;
}

const RecipeCard = ({
  id,
  title,
  description,
  image,
  cookTime,
  calories,
  tags,
  isFeatured = false,
}: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${id}`}>
      <div 
        className={`group relative rounded-xl overflow-hidden recipe-card-hover ${
          isFeatured ? "col-span-2 row-span-2" : ""
        }`}
      >
        <div 
          className="aspect-square w-full overflow-hidden"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="flex gap-2 mb-2">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/20 text-white hover:bg-white/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:translate-y-[-2px] transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-white/80 text-sm line-clamp-2 mb-3">
            {description}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center text-white/90">
              <Clock className="h-4 w-4 mr-1 text-white/70" />
              <span className="text-sm">{cookTime} min</span>
            </div>
            
            <div className="flex items-center text-white/90">
              <Flame className="h-4 w-4 mr-1 text-white/70" />
              <span className="text-sm">{calories} kcal</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
