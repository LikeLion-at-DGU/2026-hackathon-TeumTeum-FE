import * as S from "./TeamPage.styled"

const members = [
    { name: "이채은", role: "PM" },
    { name: "손효리", role: "프론트엔드" },
    { name: "김세진", role: "프론트엔드" },
    { name: "최은서", role: "백엔드" },
    { name: "임수연", role: "백엔드" },
]

function TeamPage() {
    return (
        <S.Page>
            <S.Container>
                <S.Title>여놀 팀 소개</S.Title>

                <S.MemberList>
                    {members.map((member) => (
                        <S.Member key={member.name}>
                            <strong>{member.name}</strong>
                            <span>{member.role}</span>
                        </S.Member>
                    ))}
                </S.MemberList>
            </S.Container>
        </S.Page>
    )
}

export default TeamPage
