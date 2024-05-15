import { useState, FormEvent } from 'react'
import './App.css'

interface usuarioProps {
  nome: string,
  idade: string | number,
}

function App() {
  const [nome, setNome] = useState("")
  const [inputNascimento, setInputNascimento] = useState("")
  const [usuario, setUsuario] = useState<usuarioProps>()

  function calcularIdade(event: FormEvent){
    event.preventDefault();

    let dataAtual = new Date();
    let anoNascimento = Number(inputNascimento)

    if(anoNascimento > dataAtual.getFullYear()) {
      alert("Digite uma data de nascimento valida!")
    }

    let idadeAtual = (dataAtual.getFullYear() - anoNascimento)
    
    setUsuario({
      nome: nome,
      idade: idadeAtual
    })

    setNome("")
    setInputNascimento("")
  }

  return (
    <div className='container'>
      <h1 className='title'>Descubra sua idade</h1>

      <form className='form' onSubmit={calcularIdade}>
        <label>Digite seu nome?</label>
        <input 
          type="text" 
          className='input-text' 
          placeholder='Digite seu nome...' 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        
        <label>Digite o ano que nasceu?</label>
        <input 
          type="text" 
          className='input-text' 
          placeholder='Digite o ano de nascimento...'
          value={inputNascimento}
          onChange={(e) => setInputNascimento(e.target.value)}
          required
        />

        <input type="submit" className='input-submit' value={"Descobrir idade"} />
      </form>

      {usuario && <p className='result'>{usuario.nome} você tem: {usuario.idade} anos</p>}
    </div>
  )
}

export default App
