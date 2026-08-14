import styled from "styled-components";
import theme from "../../styles/theme";

const Chip = ({ content, optionId, selected, onClick }) => {
    return (
        <ChipButton $selected={selected} onClick={onClick}>
            {content}
        </ChipButton>
    );
}

export default Chip;

const ChipButton = styled.button`
    width: fit-content;
    min-width: 150px;
    height: 46px;

    padding: 0 24px;

    border: none;
    border-radius: 24px;

    background-color: ${({ $selected }) =>
        $selected ? theme.colors.primary : theme.colors.catagory};

    color: ${({ $selected }) =>
        $selected ? theme.colors.background : theme.colors.primary};

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