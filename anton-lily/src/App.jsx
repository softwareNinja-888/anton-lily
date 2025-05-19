import { About } from "./components/About"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Socials } from "./components/helper/Socials"
import { Hero } from "./components/Hero"
import { Review } from "./components/Review"
import { Services } from "./components/Services"
import { ToDo } from "./components/ToDo"

function App() {

  return (
    <>
      <Header/>
      <div className="w-10/12 mx-auto">
        <Hero/>
        <About/>
        <Services/>
        <Gallery/>
        <ToDo/>
        <Review/>
      </div>
      <Socials/>
    </>
  )
}

export default App
