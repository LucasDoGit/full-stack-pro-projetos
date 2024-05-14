import { useState } from 'react';
import './App.css'

function App() {
  // const [signed, setSigned] = useState(false);
  const [username, setUsername] = useState("lucastimoteo")
  
  return (
    <div>
      {/* <button onClick={ () => setSigned(true) }>Entrar</button> */}

      {/* 1º PRIMEIRA FORMA DE RENDERIZACAO CONDICIONAL */}

      {/* {signed ? (
        <div>
          <h1>Bem vindo Lucas Timoteo</h1>
          <button onClick={ () => setSigned(false) }>Sair</button>
        </div>
      ) : (
        <h1>Nenhum usuario logado!</h1>
      )} */}

      {/* 2º SEGUNDA FORMA DE RENDERIZACAO CONDICIONAL */}

      {/* {signed && (
        <div>
          <h1>Bem vindo Lucas Timoteo</h1>
          <p>usuário online!</p>
          <button onClick={ () => setSigned(false) }>Sair</button>
        </div>
      )} */}

      {/* usando outras variaveis para renderizacao condicional */}

      {username.length >= 8 && <h1>Username muito grande!</h1>}

    </div>
  )
}

export default App
