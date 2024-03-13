import { useState } from "react"
import Aside from "./components/Aside/Aside"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"

function App() {
  const [asidetitle, setAsidetitle] = useState([]);
  const handleAsideTitle = (name) =>{
    const newAsidetitle = [...asidetitle, name];
    setAsidetitle(newAsidetitle);
  }
  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex justify-center gap-10">
         <Courses
         handleAsideTitle = {handleAsideTitle}
         ></Courses>
         <Aside 
          asidetitle = {asidetitle}
         ></Aside>
      </main>
    </>
  )
}

export default App
