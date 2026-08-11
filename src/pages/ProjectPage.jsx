import * as S from "./ProjectPage.styled"

const features = [
    {
        title: "관심사 기반 추천",
        description: "내 관심사와 자기계발 목표에 맞는 콘텐츠를 추천합니다.",
    },
    {
        title: "다양한 콘텐츠",
        description: "아티클과 유튜브 영상 등 여러 형태의 콘텐츠를 제공합니다.",
    },
    {
        title: "나만의 코스",
        description: "추천 콘텐츠를 하나의 학습 코스로 구성해 틈틈이 이용할 수 있습니다.",
    },
]

function ProjectPage() {
    return (
        <S.Page>
            <S.Container>
                <S.Title>프로젝트 소개</S.Title>
                <S.Introduction>
                    빈 시간을 활용해 관심사와 자기계발을 이어갈 수 있도록,
                    AI가 아티클과 유튜브 영상 등을 코스로 추천해주는 서비스입니다.
                </S.Introduction>

                <S.FeatureList>
                    {features.map((feature) => (
                        <S.Feature key={feature.title}>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </S.Feature>
                    ))}
                </S.FeatureList>
            </S.Container>
        </S.Page>
    )
}

export default ProjectPage
