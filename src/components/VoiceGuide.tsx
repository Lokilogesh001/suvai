
import { useState } from "react";
import { Mic, MicOff, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceGuideProps {
  steps: string[];
}

const VoiceGuide = ({ steps }: VoiceGuideProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real implementation, this would trigger voice recognition
    console.log(isListening ? "Stopped listening" : "Started listening");
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    // In a real implementation, this would trigger text-to-speech
    console.log(isSpeaking ? "Stopped speaking" : "Started speaking step:", currentStep + 1);
  };

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="glass-card rounded-xl p-4 animate-scale-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Voice Assistant</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${isListening ? "bg-primary text-primary-foreground" : ""}`}
            onClick={toggleListening}
            aria-label={isListening ? "Stop listening" : "Start listening"}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${isSpeaking ? "bg-primary text-primary-foreground" : ""}`}
            onClick={toggleSpeaking}
            aria-label={isSpeaking ? "Stop speaking" : "Start speaking"}
          >
            {isSpeaking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <div className="bg-secondary/50 rounded-lg p-3 mb-4">
        <p className="text-sm">
          <span className="font-semibold">Step {currentStep + 1}: </span>
          {steps[currentStep]}
        </p>
      </div>
      
      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
          className="text-sm"
        >
          Previous
        </Button>
        
        <div className="flex items-center gap-1">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${
                index === currentStep ? "bg-primary" : "bg-secondary"
              }`}
            ></span>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          className="text-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default VoiceGuide;
