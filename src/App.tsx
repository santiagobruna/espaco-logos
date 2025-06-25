import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SectionHistory from "./components/SectionHistory"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Hero/>
      <SectionHistory/>
    </>
  )
}

export default App
