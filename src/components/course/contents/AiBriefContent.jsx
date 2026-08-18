import * as S from "./AiBriefContent.styled";
import AiBriefImg from "../../../assets/img/aibrief.example.png";

const AiBriefContent = () => {
    return (
        <S.Container>
            <S.Title>
                "하루 '4알' 넘게 먹으면 독"… <br />탈모에 좋다던 '이 음식' 뜻밖의 경고
            </S.Title>
            <S.Img src={AiBriefImg} alt="ai브리프 이미지" />
            <S.Description>
                최근 2030 세대를 중심으로 탈모 관심이 급증하고 있다. 과도한 스트레스와 불규칙한 식습관, 환경오염으로 후천적 탈모 비율이 늘어난 데다, '미병(未病)' 단계부터 미리 관리하려는 저속노화·헬스디깅 트렌드가 결합한 결과다.<br />
탈모가 삶의 질을 좌우하는 이슈가 되면서 두피 건강과 음식에 대한 관심도 뜨겁다. 모발에 좋다고 알려진 대표 음식들의 영양학적 효능과 올바른 섭취법을 팩트를 기반으로 체크해 본다. 
<br />견과류는 모발의 주성분인 단백질과 비타민 E, 불포화지방산 등이 풍부해 두피 생리학적으로 모발을 건강하게 만드는 대표 간식으로 꼽힌다.
<br />견과류에 들어있는 비타민 E와 아연 은 강력한 항산화 역할로 활성산소가 모발의 뿌리에 있는 모낭세포를 공격하는 것을 막고, 모발을 만들어내는 '모모세포'가 분열하도록 돕는다. 
            </S.Description>
        </S.Container>
    );
};

export default AiBriefContent;
