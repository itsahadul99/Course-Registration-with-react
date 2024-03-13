import Aside from "./components/Aside/Aside"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex justify-center gap-10">
         <Courses></Courses>
         <Aside></Aside>
      </main>
    </>
  )
}

export default App
