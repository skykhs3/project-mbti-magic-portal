
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ResultsDisplay from "@/components/ResultsDisplay";
import { mbtiTypes } from "@/utils/mbtiTypes";

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, scores } = location.state || {};

  useEffect(() => {
    // If no result is found, redirect to test page
    if (!result) {
      navigate("/test");
    }
  }, [result, navigate]);

  if (!result || !mbtiTypes[result]) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-4">당신의 MBTI 결과</h1>
          <p className="text-muted-foreground">당신의 성격 유형과 특징을 알아보세요.</p>
        </div>

        <ResultsDisplay 
          result={mbtiTypes[result]} 
          scores={scores}
        />
      </div>
    </Layout>
  );
};

export default Results;
