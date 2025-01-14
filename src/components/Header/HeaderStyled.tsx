import styled from 'styled-components'

export const Container = styled.div`
        width: 100%;
        height: 64px;
        background-color: ${props => props.theme.colors.primary};

        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3{
            margin: 0;
            padding: 0;
            color: ${props => props.theme.colors.textColor};
        }
`

