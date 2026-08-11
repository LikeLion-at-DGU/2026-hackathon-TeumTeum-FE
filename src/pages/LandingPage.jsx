import ProjectPage from "./ProjectPage"
import { Link } from "react-router-dom"
import * as S from "./LandingPage.styled"

function Landing () {
    return (
        <S.Hero>
            <S.Title>
                <span>멋쟁이사자처럼 <br />동국대학교 중앙해커톤 3팀</span>
            </S.Title>
            <S.ButtonWapper>
                <Link to="/team">
                    <S.Button>팀 소개 페이지</S.Button>
                </Link>
                <Link to="/project">
                    <S.Button>프로젝트 소개 페이지</S.Button>                
                </Link>
            </S.ButtonWapper>
        </S.Hero>
    )
}

export default Landing