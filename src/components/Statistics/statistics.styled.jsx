import styled from "styled-components";



export const StatisticsContainer = styled.section`
    border: ${p => p.theme.borders.normal};
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-top: 5px;
    margin-bottom: ${p => p.theme.space[6]}px;
    background-color: ${p=>p.theme.colors.white};
`

export const Title = styled.h2`
    font-size: ${p=>p.theme.fontSizes.m};
    margin-bottom: 5px;
    
`;


export const StatisticsInfo = styled.ul`
    display: flex;
    justify-content: space-evenly;

    li {
        display: flex;
        flex-direction: column;
        width: calc(100% / 5);
        padding: 5px;
        background-color: blue;
        color: ${p=>p.theme.colors.white}; 
    }
`
export const TitleInfo = styled.span`
    margin-bottom: 5px;
`;

