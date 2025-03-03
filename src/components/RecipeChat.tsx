
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ChefHat, ArrowUp, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from "./ChatMessage";

// Define message types
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "Hi! I'm your recipe assistant. Tell me what ingredients you have, and I'll suggest some delicious recipes you can make.",
  },
];

const generateMockRecipe = (ingredients: string): string => {
  // This is a mock function that would be replaced with actual AI integration
  const ingredientList = ingredients.split(",").map(i => i.trim());
  
  const recipeTitle = `${ingredientList[0].charAt(0).toUpperCase() + ingredientList[0].slice(1)} ${
    ingredientList.length > 1 ? `and ${ingredientList[1]}` : ""
  } Special`;
  
  return `
# ${recipeTitle}

## Ingredients
${ingredientList.map(ingredient => `- ${ingredient}`).join('\n')}
${ingredientList.length < 3 ? "- salt and pepper to taste\n- olive oil\n- garlic (optional)" : ""}

## Instructions
1. Prepare all ingredients by washing and chopping as needed.
2. Heat olive oil in a pan over medium heat.
${ingredientList.includes("chicken") || ingredientList.includes("meat") ? 
  "3. Season the meat with salt and pepper, then cook until golden brown.\n4. Remove and set aside." : 
  "3. Sauté any vegetables until tender."}
${ingredientList.includes("pasta") || ingredientList.includes("rice") ? 
  "4. Cook the pasta/rice according to package instructions.\n5. Drain and combine with the other ingredients." : 
  "4. Combine all ingredients and cook for another 5 minutes."}
6. Serve hot and enjoy your meal!

## Cooking Time
Approximately 25 minutes

## Servings
2-3 people
  `;
};

const RecipeChat = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // In a real implementation, this would be an API call to an AI service
      setTimeout(() => {
        const recipe = generateMockRecipe(input);
        
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: recipe,
        };
        
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500); // Simulate API delay
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate recipe. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] md:h-[600px] bg-secondary/30 rounded-xl overflow-hidden border">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
            />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              </div>
              <div>Generating recipe...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <form 
        onSubmit={handleSubmit} 
        className="p-4 border-t bg-card/50 backdrop-blur-sm"
      >
        <div className="relative flex items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="List your ingredients (e.g., chicken, rice, bell peppers)..."
            className="pr-24 py-6 bg-background"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-1 h-10 w-10 rounded-full"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowUp className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1 justify-center">
          <ChefHat className="h-3 w-3" />
          <span>Powered by suvAI Recipe Assistant</span>
        </div>
      </form>
    </div>
  );
};

export default RecipeChat;
