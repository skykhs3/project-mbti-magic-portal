
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex justify-between mb-2 text-sm text-muted-foreground">
        <span>{current} / {total} 질문</span>
        <span>{Math.round(percentage)}% 완료</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default ProgressBar;
