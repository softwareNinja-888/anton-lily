import { About } from "./components/About"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Header/>
      <div className="w-11/12 mx-auto">
        <Hero/>
        <About/>
        <Services/>
      </div>
    </>
  )
}

export default App
