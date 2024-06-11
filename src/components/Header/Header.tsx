import { useContext } from "react";
import { Container } from "./HeaderStyled";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";

type Props = {
    onChanceTheme: () => void;
}

export default function Header( {onChanceTheme}: Props ) {

    const { name, colors } = useContext(ThemeContext);    

    return (
        <Container>
            <h3>oweslley</h3>

            <ReactSwitch 
                onChange={onChanceTheme}
                checked={name == 'ligth'}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor={colors.secundary}
                onColor={colors.secundary}
            />
        </Container>
    )
}