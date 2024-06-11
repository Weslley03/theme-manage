import { ThemeProvider } from "styled-components"
import Header from "./components/Header/Header"
import ligthTheme from "./themes/ligth"
import { useState } from "react"
import  darkTheme from './themes/dark'
import { Container, Content, LeftContent, RigthContent } from './AppStyled.ts'

function App() {

  const [ theme, setTheme ] = useState(ligthTheme)

  function onChanceTheme(){
    setTheme(theme.name == 'ligth' ? darkTheme : ligthTheme )
  }

  return (
    <ThemeProvider theme={theme}>  
      <Container>
            <Header onChanceTheme={onChanceTheme} />
            <Content>
              <LeftContent />
              <RigthContent />
            </Content>
      </Container>
    </ThemeProvider>
  )
}

export default App
