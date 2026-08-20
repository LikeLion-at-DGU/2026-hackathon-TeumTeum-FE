import styled from "styled-components";

export const OptionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    margin: 50px 40px 150px 40px;
`
export const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    gap: 15px;
`
export const Button = styled.button`

    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: manipulation;
    
    background-color: ${({theme, $isSelected }) => $isSelected ? theme.colors.primary : theme.colors.optionGray};
    width: 70px;
    height: 70px;
    border-radius: 35px;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    transition:
    background-color 0.15s ease,
    transform 0.1s ease,
    box-shadow 0.15s ease;

    &:hover {
        background-color: ${({ theme, $isSelected }) =>
        $isSelected
            ? theme.colors.primary
            : theme.colors.optionGray};

        box-shadow: 0 6px 12px rgba(147, 147, 147, 0.25);
    }

    &:active {
        background-color: ${({ theme, $isSelected }) =>
        $isSelected
            ? theme.colors.primary
            : theme.colors.optionGray};

        box-shadow: 0 2px 4px rgba(147, 147, 147, 0.25);
        transform: scale(0.92);
    }

    &:disabled {
        background-color: #b2b2b2;
        cursor: not-allowed;
    }

`
export const Label = styled.span`
    color: ${({theme, $isSelected }) => $isSelected ? theme.colors.primary : theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.catagory};
    font-weight: ${({theme}) => theme.fontWeight.medium};

    transition:
    transform 0.1s ease,
    box-shadow 0.15s ease;

    &:hover {
        background-color: ${({ theme, $isSelected }) =>
        $isSelected
            ? theme.colors.primary
            : theme.colors.gray};

        box-shadow: 0 6px 12px rgba(147, 147, 147, 0.25);
    }

    &:active {
        background-color: ${({ theme, $isSelected }) =>
        $isSelected
            ? theme.colors.primary
            : theme.colors.catagory};

        box-shadow: 0 2px 4px rgba(147, 147, 147, 0.25);
        transform: scale(0.92);
    }

    &:disabled {
        background-color: #b2b2b2;
        cursor: not-allowed;
    }
`

export const Icon = styled.img`
    width: 36px;
    height: 36px;
    object-fit: contain;
    color: ${({theme}) => theme.colors.primary};
`
