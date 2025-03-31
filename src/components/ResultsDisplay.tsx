
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MBTIType } from "@/utils/mbtiTypes";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ShareButton from "./ShareButton";

interface ResultsDisplayProps {
  result: MBTIType;
  scores: Record<string, number>;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, scores }) => {
  const navigate = useNavigate();
  
  const getDimensionPercent = (dim1: string, dim2: string) => {
    const total = Math.abs(scores[dim1]) + Math.abs(scores[dim2]);
    if (total === 0) return 50;
    return Math.round((Math.abs(scores[dim1]) / total) * 100);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="mb-8 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold gradient-text">{result.code} - {result.nickname}</CardTitle>
          <CardDescription className="text-xl">{result.name}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{result.description}</p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-2">강점</h3>
              <ul className="list-disc pl-5 space-y-1">
                {result.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">도전</h3>
              <ul className="list-disc pl-5 space-y-1">
                {result.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-6">
            <h3 className="font-semibold text-lg mb-4">당신의 성향 분석</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>외향 (E) {getDimensionPercent("E", "I")}%</span>
                  <span>{getDimensionPercent("I", "E")}% 내향 (I)</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-2 bg-primary ${scores.E >= scores.I ? 'float-left' : 'float-right'}`} 
                    style={{ width: `${Math.max(getDimensionPercent("E", "I"), getDimensionPercent("I", "E"))}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>감각 (S) {getDimensionPercent("S", "N")}%</span>
                  <span>{getDimensionPercent("N", "S")}% 직관 (N)</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-2 bg-primary ${scores.S >= scores.N ? 'float-left' : 'float-right'}`} 
                    style={{ width: `${Math.max(getDimensionPercent("S", "N"), getDimensionPercent("N", "S"))}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>사고 (T) {getDimensionPercent("T", "F")}%</span>
                  <span>{getDimensionPercent("F", "T")}% 감정 (F)</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-2 bg-primary ${scores.T >= scores.F ? 'float-left' : 'float-right'}`} 
                    style={{ width: `${Math.max(getDimensionPercent("T", "F"), getDimensionPercent("F", "T"))}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>판단 (J) {getDimensionPercent("J", "P")}%</span>
                  <span>{getDimensionPercent("P", "J")}% 인식 (P)</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-2 bg-primary ${scores.J >= scores.P ? 'float-left' : 'float-right'}`} 
                    style={{ width: `${Math.max(getDimensionPercent("J", "P"), getDimensionPercent("P", "J"))}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <ShareButton result={result.code} nickname={result.nickname} />
          
          <div className="flex justify-center pt-6">
            <Button onClick={() => navigate("/test")} className="px-8 py-2">
              테스트 다시 하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
