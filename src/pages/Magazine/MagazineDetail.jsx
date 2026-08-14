import { useParams } from "react-router-dom";
import { mockMagazines } from "../../data/mockMagazines";
import Header from "../../components/layout/Header";
import * as S from "../Magazine/MagazineDetail"

const MagazineDetail = () => {
    const { magazineId } = useParams();
    
    const magazine = mockMagazines.find(
        (item) => item.id === Number(magazineId)
    );

    if (!magazine) {
        return <p>매거진을 찾을 수 없습니다.</p>;
    }

    return (
        <>
        <Header
            title="발견"
            description="틈틈이 추천하는 오늘의 틈새 코스"
        />
        <main>
            <h1>{magazine.title}</h1>
            <S.Img src={magazine.image} alt="" />
            <p>{magazine.content}</p>
        </main>
        </>
    )
}

export default MagazineDetail