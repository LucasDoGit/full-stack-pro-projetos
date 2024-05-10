import { Header } from "./components/header"
import { Aluno } from "./components/aluno"
import { Footer } from "./components/footer"

export default function App(){
  return(
    <div>
      <Header title="Estudando TSX" />
      <Aluno nome="Lucas Timoteo" idade={21} />
      <Footer/>
    </div>
  )
}