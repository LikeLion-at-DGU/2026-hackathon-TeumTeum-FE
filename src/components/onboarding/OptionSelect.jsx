import * as S from "./OptionSelect.styled"

const options = [
    { id: 1, label: "독서", icon: "📖" },
    { id: 2, label: "듣기", icon: "🎧" },
    { id: 3, label: "스트레칭", icon: "🏃" },
    { id: 4, label: "마인드컨트롤", icon: "🧘" },
];

const OptionSelect = () => {
    return (
        <S.OptionGrid>
            {options.map((option) => (
                <S.Option key={option.id}>
                    <S.Button type="button">
                        {option.icon}
                    </S.Button>
                    <S.Label>{option.label}</S.Label>
                </S.Option>
            ))}
        </S.OptionGrid>
    )
}

export default OptionSelect