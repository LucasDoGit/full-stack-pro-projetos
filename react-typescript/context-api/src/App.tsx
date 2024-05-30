import { Alunos } from "./components/Alunos"
import UserProvider from "./components/contexts/user"
import { Footer } from "./components/Footer"

function App() {
  return (
    <UserProvider>
    <div>
      <h1>Escola Dev</h1>
      <br/>
      <hr />

      <Alunos/>

    </div>

    <Footer />
    </UserProvider>
  )
}

export default App