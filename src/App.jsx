import AboutMe from './components/aboutme/AboutMe'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import Projects from './components/projects/Projects'
import SkillsAndTools from './components/SkillsAndTools/SkillsAndTools'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './App.css'
function App() {


  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <SkillsAndTools />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
