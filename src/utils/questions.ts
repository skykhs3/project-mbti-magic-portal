
export interface Question {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  directionA: string; // First personality trait (E, S, T, or J)
  directionB: string; // Second personality trait (I, N, F, or P)
}

// Each question has a clear dichotomy and maps to one of the 4 MBTI dimensions
export const questions: Question[] = [
  // E/I Questions (Extraversion vs Introversion)
  {
    id: 1,
    text: "사회적 모임에서 당신은:",
    dimension: "EI",
    directionA: "대화를 주도하고 새로운 사람을 만나는 것을 즐깁니다",
    directionB: "이미 알고 있는 소수의 사람들과 더 깊은 대화를 선호합니다"
  },
  {
    id: 2,
    text: "다른 사람들과 교류하는 바쁜 하루 후에 당신은 보통:",
    dimension: "EI",
    directionA: "활력을 얻고 더 많은 사회적 상호작용을 할 준비가 됩니다",
    directionB: "혼자 조용한 시간을 갖고 재충전할 필요가 있습니다"
  },
  {
    id: 3,
    text: "프로젝트 작업을 할 때, 당신은 다음을 선호합니다:",
    dimension: "EI",
    directionA: "팀과 협력하고 아이디어를 공개적으로 논의하는 것",
    directionB: "완성된 생각을 공유하기 전에 독립적으로 작업하는 것"
  },
  {
    id: 4,
    text: "당신은 스스로를 다음 중 어느 쪽으로 더 생각하나요:",
    dimension: "EI",
    directionA: "큰 소리로 생각하는 말하는 사람",
    directionB: "내적으로 처리하는 듣는 사람"
  },
  {
    id: 5,
    text: "당신의 이상적인 주말은 다음을 포함합니다:",
    dimension: "EI",
    directionA: "많은 사람들이 있는 파티나 이벤트에 가기",
    directionB: "책이나 몇몇 친한 친구들과 함께 집에서 휴식하기"
  },

  // S/N Questions (Sensing vs Intuition)
  {
    id: 6,
    text: "새로운 것을 배울 때, 당신은 다음에 집중하는 것을 선호합니다:",
    dimension: "SN",
    directionA: "구체적인 사실과 실용적인 응용",
    directionB: "기본적인 패턴과 이론적 가능성"
  },
  {
    id: 7,
    text: "문제를 해결할 때, 당신은 일반적으로:",
    dimension: "SN",
    directionA: "입증된 방법과 과거 경험에 의존합니다",
    directionB: "새로운 접근법과 미래 가능성을 찾습니다"
  },
  {
    id: 8,
    text: "당신은 다음에 더 관심이 있습니다:",
    dimension: "SN",
    directionA: "실제적이고 현실적인 것",
    directionB: "가능하고 상상할 수 있는 것"
  },
  {
    id: 9,
    text: "독서할 때, 당신은 다음과 같은 책을 선호합니다:",
    dimension: "SN",
    directionA: "세부 사항을 자세히 설명하고 실용적인 정보가 있는 책",
    directionB: "아이디어와 이론적 개념을 탐구하는 책"
  },
  {
    id: 10,
    text: "당신은 다음을 신뢰하는 경향이 있습니다:",
    dimension: "SN",
    directionA: "직접적인 경험과 관찰",
    directionB: "상황에 대한 통찰력과 직관"
  },

  // T/F Questions (Thinking vs Feeling)
  {
    id: 11,
    text: "결정을 내릴 때, 당신은 주로 다음을 고려합니다:",
    dimension: "TF",
    directionA: "논리, 원칙, 객관적 분석",
    directionB: "가치, 조화, 다른 사람들이 어떻게 영향을 받을지"
  },
  {
    id: 12,
    text: "토론이나 의견 불일치에서, 당신은 다음을 중요시합니다:",
    dimension: "TF",
    directionA: "가장 논리적이고 정확한 답을 찾는 것",
    directionB: "모두가 좋게 느낄 수 있는 해결책을 찾는 것"
  },
  {
    id: 13,
    text: "당신은 다음과 같은 점에서 더 자주 칭찬을 받습니다:",
    dimension: "TF",
    directionA: "공정하고, 합리적이며, 객관적인 점",
    directionB: "공감적이고, 동정심이 많으며, 지지적인 점"
  },
  {
    id: 14,
    text: "피드백을 줄 때, 당신은 다음과 같은 경향이 있습니다:",
    dimension: "TF",
    directionA: "문제에 대해 직접적이고 솔직하게 말하는 것",
    directionB: "감정을 고려하여 재치 있고 사려 깊게 말하는 것"
  },
  {
    id: 15,
    text: "어려운 상황에 직면했을 때, 당신은 먼저 다음을 고려합니다:",
    dimension: "TF",
    directionA: "논리적으로 가장 합리적인 것이 무엇인지",
    directionB: "관련된 사람들에게 어떤 영향을 미치는지"
  },

  // J/P Questions (Judging vs Perceiving)
  {
    id: 16,
    text: "계획과 일정에 관하여, 당신은 일반적으로:",
    dimension: "JP",
    directionA: "명확한 계획을 세우고 그것을 고수하는 것을 선호합니다",
    directionB: "옵션을 열어두고 즉흥적으로 행동하는 것을 선호합니다"
  },
  {
    id: 17,
    text: "당신의 작업 공간은 보통:",
    dimension: "JP",
    directionA: "조직적이고 구조화되어 있습니다",
    directionB: "현재 프로젝트에 맞게 유연하고 적응 가능합니다"
  },
  {
    id: 18,
    text: "당신은 다음과 같을 때 가장 편안함을 느낍니다:",
    dimension: "JP",
    directionA: "일이 미리 결정되고 예정되어 있을 때",
    directionB: "계획이 열려있고 필요에 따라 변경될 수 있을 때"
  },
  {
    id: 19,
    text: "당신에게 마감일은:",
    dimension: "JP",
    directionA: "미리 충족시키는 것이 중요합니다",
    directionB: "때로는 마지막 순간 작업을 촉발하는 지침입니다"
  },
  {
    id: 20,
    text: "당신은 다음과 같은 환경을 선호합니다:",
    dimension: "JP",
    directionA: "명확한 기대치가 있는 구조화된 환경",
    directionB: "창의성과 적응을 위한 여지가 있는 유연한 환경"
  }
];
