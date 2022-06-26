import styled from "styled-components"

export const MainWraper = styled.div`
    width: 330px;
    text-align: center;
    border: ${p => p.theme.borders.normal};
    margin-top: 40px;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    font-family: ${p=>p.theme.fonts.body};
    ul {
        display: flex;
	    justify-content: space-evenly;
        background-color: ${p=>p.theme.colors.primary};
        list-style: none;

        li{
            display:flex;
            flex-direction:column;
            width: 110px;
            padding-top: 15px;
            padding-bottom: 15px;
            border: ${p => p.theme.borders.normal} 
            ${p=>p.theme.colors.secondary};
        }
    }
    p {
        margin-bottom: 10px;
    }

` ;

export const UserNameInfo = styled.div`
    padding-bottom: 25px;
    padding-top: ${p=>p.theme.space[4]}px;
    background-color:${p=>p.theme.colors.white};
    img {
        width: 110px;
        border-radius: ${p => p.theme.radii.round};
        border: ${p => p.theme.borders.normal}; 
        margin-bottom: 10px;
        background-color:${p=>p.theme.colors.white};
    } 
`
export const MetaTitle = styled.span`
    margin-bottom: 5px;
    font-weight: ${p => p.theme.fontWeights.bold};
`
