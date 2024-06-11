import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.backgroundColor};
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    margin-top: 32px;

    gap: 32px;
    padding: 0 32px;
`

export const LeftContent = styled.div`
    width: 60%;
    height: 80%;
    background-color: ${props => props.theme.colors.ligthGray};
`

export const RigthContent = styled.div`
    width: 40%;
    height: 80%;
    background-color: ${props => props.theme.colors.ligthGray};
`