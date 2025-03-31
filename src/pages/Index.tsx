
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          MBTI 성격유형 테스트
        </h1>
        
        <p className="text-xl text-muted-foreground">
          자신의 성격 유형을 발견하고 더 깊이 이해하세요. 20개의 간단한 질문을 통해 당신의 MBTI 유형을 찾아보세요.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full my-8">
          <div className="p-6 bg-blue-50 rounded-lg text-center flex flex-col items-center">
            <div className="text-2xl font-bold mb-2">E / I</div>
            <div className="text-sm text-muted-foreground">
              외향 vs 내향
            </div>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg text-center flex flex-col items-center">
            <div className="text-2xl font-bold mb-2">S / N</div>
            <div className="text-sm text-muted-foreground">
              감각 vs 직관
            </div>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-lg text-center flex flex-col items-center">
            <div className="text-2xl font-bold mb-2">T / F</div>
            <div className="text-sm text-muted-foreground">
              사고 vs 감정
            </div>
          </div>
          
          <div className="p-6 bg-orange-50 rounded-lg text-center flex flex-col items-center">
            <div className="text-2xl font-bold mb-2">J / P</div>
            <div className="text-sm text-muted-foreground">
              판단 vs 인식
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg"
            onClick={() => navigate("/test")}
          >
            테스트 시작하기
          </Button>
          <p className="text-sm text-muted-foreground">
            약 5분 소요됩니다
          </p>
        </div>
        
        <div className="mt-12 p-6 border rounded-lg bg-white/50">
          <h2 className="text-2xl font-semibold mb-4">MBTI란 무엇인가요?</h2>
          <p className="text-muted-foreground">
            MBTI(Myers-Briggs Type Indicator)는 개인의 성격 유형을 16가지로 분류하는 성격 유형 지표입니다. 
            이 테스트는 사람들이 세상을 인식하고 결정을 내리는 방식에 대한 심리학적 이론에 기초합니다. 
            MBTI는 자기 이해와 개인 간의 차이를 이해하는 데 도움이 됩니다.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
