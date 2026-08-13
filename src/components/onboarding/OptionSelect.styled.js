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
    background-color: ${({theme}) => theme.colors.catagory};
    width: 70px;
    height: 70px;
    border-radius: 35px;
    font-size: 30px;
`
export const Label = styled.span`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.catagory};
    font-weight: ${({theme}) => theme.fontWeight.medium};
`