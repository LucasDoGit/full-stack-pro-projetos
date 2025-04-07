import { useState } from 'react'
import { Button } from './components/Button'

// useFormStatus só funciona com actions em forms

function App() {
  const [message, setMessage] = useState("");


  async function handleRegister(formData: FormData){
    // FAKE DELAY
    await new Promise(resolve => setTimeout(resolve, 2500))

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
          type="email"
          name="email"
          placeholder='Digite seu email'
          required
        />

      <br/>

        <Button />
      </form>

      <h2>{message}</h2>
    </div>
  )
}

export default App
