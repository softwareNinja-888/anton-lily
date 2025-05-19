import { About } from "./components/About"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

function App() {

  return (
    <>
      <Header/>
      <div className="w-11/12 mx-auto">
        <Hero/>
        <About/>
      </div>
    </>
  )
}

export default App
