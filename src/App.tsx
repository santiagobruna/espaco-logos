import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import SectionHistory from "./components/SectionHistory"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Hero/>
      <SectionHistory/>
      <Projects/>
    </>
  )
}

export default App
