import * as S from "./ProgressBar.styled"

const ProgressBar = () => {
    return (
        <>
        <S.ProgressTrack>
            <S.ProgressBar $progress={progress}/>
        </S.ProgressTrack>
        </>
    )
}