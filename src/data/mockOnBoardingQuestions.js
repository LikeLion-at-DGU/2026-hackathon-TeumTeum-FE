export const mockOnboardingQuestions = {
    questions: [
        {
        order: 1,
        question_id: 1,
        question: "관심 카테고리를 선택해주세요.",
        description: "코스 추천에 활용돼요. (중복 선택 가능)",
        options: [
            { option_id: 1, content: "독서" },
            { option_id: 2, content: "듣기" },
            { option_id: 3, content: "스트레칭" },
            { option_id: 4, content: "마인드컨트롤" },
        ],
        },
        {
        order: 2,
        question_id: 2,
        question: "보통 어떤 순간에 '틈'이 찾아오나요?",
        description: "자주 마주치는 공백시간 상황을 알려주세요. (복수 선택 가능)",
        options: [
            { option_id: 5, content: "이동할 때" },
            { option_id: 6, content: "약속 전에" },
            { option_id: 7, content: "휴식할 때" },
            { option_id: 8, content: "업무 중에" },
        ],
        },
        {
        order: 3,
        question_id: 3,
        question: "요즘 어떤 주제에 마음이 가시나요?",
        description: "가장 흥미로운 주제 3가지를 선택해 주세요!",
        options: [
            { option_id: 9, content: "트렌드 토픽" },
            { option_id: 10, content: "멘탈 케어" },
            { option_id: 11, content: "운동" },
            { option_id: 12, content: "휴식" },
        ],
        },
    ],
};
