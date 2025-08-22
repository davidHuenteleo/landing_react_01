//Styles CSS
import "./App.css"


//Imports Components jsx
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import ContactMe from "./components/ContactMe/ContactMe"
import Footer from "./components/Footer/Footer"

//Variable const
const App = () => {
  return(
        <>
          <Navbar />

          <div className="container">
              <Hero />
              <Skills />
              <WorkExperience />
              <ContactMe />
          </div>

          <Footer />
        </>
    )
  }

export default App