
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import { questions } from "@/utils/questions";
import { toast } from "@/components/ui/use-toast";

type ScoreType = {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
};

const Test: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<ScoreType>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const navigate = useNavigate();

  const handleAnswer = (dimension: string, value: number) => {
    if (dimension === "EI") {
      if (value > 0) {
        setScores(prev => ({ ...prev, E: prev.E + 1 }));
      } else {
        setScores(prev => ({ ...prev, I: prev.I + 1 }));
      }
    } else if (dimension === "SN") {
      if (value > 0) {
        setScores(prev => ({ ...prev, S: prev.S + 1 }));
      } else {
        setScores(prev => ({ ...prev, N: prev.N + 1 }));
      }
    } else if (dimension === "TF") {
      if (value > 0) {
        setScores(prev => ({ ...prev, T: prev.T + 1 }));
      } else {
        setScores(prev => ({ ...prev, F: prev.F + 1 }));
      }
    } else if (dimension === "JP") {
      if (value > 0) {
        setScores(prev => ({ ...prev, J: prev.J + 1 }));
      } else {
        setScores(prev => ({ ...prev, P: prev.P + 1 }));
      }
    }

    // Move to next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      calculateResult();
    }
  };

  const calculateResult = () => {
    const mbtiResult = [
      scores.E > scores.I ? "E" : "I",
      scores.S > scores.N ? "S" : "N",
      scores.T > scores.F ? "T" : "F",
      scores.J > scores.P ? "J" : "P"
    ].join("");

    // Navigate to results page with calculated type
    navigate(`/results`, { 
      state: { 
        result: mbtiResult,
        scores: scores
      } 
    });

    toast({
      title: "테스트 완료!",
      description: "당신의 MBTI 유형 결과를 확인하세요.",
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-4">MBTI 성격유형 테스트</h1>
          <p className="text-muted-foreground">각 질문에 대해 당신을 더 잘 설명하는 옵션을 선택하세요.</p>
        </div>

        <ProgressBar current={currentQuestion + 1} total={questions.length} />

        {questions[currentQuestion] && (
          <QuestionCard 
            question={questions[currentQuestion]} 
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </Layout>
  );
};

export default Test;
