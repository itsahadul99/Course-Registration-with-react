import { useState } from "react"
import Aside from "./components/Aside/Aside"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"

function App() {
  const [asidetitle, setAsidetitle] = useState([]);
  const [credits, setCredits] = useState(0);
  const [prices, setPrices] = useState(0);
  const [credit, setCredit] = useState(0);
  // click event 
  const handleAsideTitle = (name,credit, price) =>{
    const newAsidetitle = [...asidetitle, name];
    setAsidetitle(newAsidetitle);
    setCredits(credits + credit);
    setPrices(prices + price);
    setCredit(credit)
  }
  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10">
         <Courses
         handleAsideTitle = {handleAsideTitle}
         ></Courses>
         <Aside 
          asidetitle = {asidetitle}
          credit = {credits}
          price = {prices}
          creditOnly = {credit}
         ></Aside>
      </main>
    </>
  )
}

export default App
