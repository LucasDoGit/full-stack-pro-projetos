import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");


  function handleRegister(formData: FormData){

    const name = formData.get("name")
    const email = formData.get("email")

    setMessage(`Olá, seja bem vindo ${name} - Cadastrado no e-mail ${email}`)
  }

  return (
    <div>
      <h1>Form + Action</h1>

      <form action={handleRegister}>
        <input 
          type="text"
          name="name"
          placeholder='Digite o seu nome'
          required
        /><br/>

        <input 
          type="text"
          name="email"
          placeholder='Digite seu email'
          required
        />

      <br/>

        <button type="submit">Cadastrar</button>
      </form>

      <h2>{message}</h2>
    </div>
  )
}

export default App
