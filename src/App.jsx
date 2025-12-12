import AboutMe from './components/aboutme/AboutMe'
import Home from './components/home/home'
import NavBar from './components/navbar/NavBar'
import Projects from './components/projects/Projects'
import SkillsAndTools from './components/SkillsAndTools/SkillsAndTools'
import Contact from './contact/contact'
import './App.css'
function App() {


  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <SkillsAndTools />
      <Projects />
      <Contact />
    </>
  )
}

export default App
