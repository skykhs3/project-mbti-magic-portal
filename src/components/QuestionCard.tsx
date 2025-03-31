
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Question } from "@/utils/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (dimension: string, value: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg animate-float">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-6 text-center">{question.text}</h3>
        
        <div className="flex flex-col gap-4">
          <button
            className="p-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all text-left"
            onClick={() => onAnswer(question.dimension, 1)}
          >
            {question.directionA}
          </button>
          
          <button
            className="p-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all text-left"
            onClick={() => onAnswer(question.dimension, -1)}
          >
            {question.directionB}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
