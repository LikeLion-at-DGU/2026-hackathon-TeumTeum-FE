import * as S from "./AiBriefContent.styled";
import AiBriefImg from "../../../assets/img/aibrief.example.png";

const AiBriefContent = ({ content }) => {
    return (
        <S.Container>
            <S.Title>{content.title}</S.Title>

            {content.image_url && (
                <S.Img
                src={content.image_url || AiBriefImg}
                alt={content.title}
                />
            )}
            <S.Description>{content.content}</S.Description>
        </S.Container>
    );
};

export default AiBriefContent;
