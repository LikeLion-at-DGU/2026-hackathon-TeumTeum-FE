import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
    width: 100%;
    padding: 0 28px;
    box-sizing: border-box;
`;

export const SubTitle = styled.p`
    margin: 0 0 8px;

    font-size: 14px;
    color: #b5b5b5;
`;

export const Question = styled.h2`
    margin: 0;

    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    color: #4a4a4a;
`;

export const OptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

    margin-top: 28px;
`;

export const OptionButton = styled.button`
    width: 100%;
    height: 50px;

    border: none;
    border-radius: 999px;

    background-color: ${({ $selected }) =>
        $selected ? "#2ecc40" : "#f1f1f1"};

    color: ${({ $selected }) =>
        $selected ? "#ffffff" : "#2ecc40"};

    font-size: 16px;
    font-weight: 500;

    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;

    transition:
        background-color 0.15s ease,
        transform 0.1s ease;

    &:hover {
        background-color: ${({ $selected }) =>
            $selected ? theme.colors.primary : theme.colors.catagory};
    }

    &:active {
        transform: scale(0.97);
    }
`;

export const SecondQuestion = styled.h2`
    margin: 40px 0 28px;

    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    color: #4a4a4a;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 140px;

    padding: 20px 24px;

    box-sizing: border-box;

    border: 2px solid #eeeeee;
    border-radius: 26px;

    resize: none;
    outline: none;

    font-size: 16px;
    font-family: inherit;

    &::placeholder {
        color: #bdbdbd;
    }
    
    margin-bottom: 200px;
`;