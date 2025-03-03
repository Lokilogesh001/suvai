
import { useState } from "react";
import Navbar from "@/components/Navbar";
import RecipeChat from "@/components/RecipeChat";
import { Separator } from "@/components/ui/separator";

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Recipe Assistant</h1>
          <p className="text-muted-foreground">
            Tell me what ingredients you have, and I'll suggest personalized recipes
          </p>
          <Separator className="my-6" />
        </div>
        
        <RecipeChat />
      </div>
    </div>
  );
};

export default ChatbotPage;
