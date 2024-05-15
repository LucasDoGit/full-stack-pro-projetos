import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png';

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSeleciona, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivacao",
      frases: [
        "Siga os bons e aprenda com eles.",
        "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
        "Apreciando cada passo, mas já sonhando com as próximas conquistas!",
        "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
        "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
        "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão."
      ]
    }, 
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Bom dia! Desejo que a sua manhã seja tão bela e especial quanto você e o seu coração. ",
        "Você é especial para mim, então merece um bom dia exclusivo e cheio de carinho!",
        "Que seu dia seja leve e doce. Que traga amor, sorrisos e energia positiva.",
        "Olha o que temos aqui: um novo dia! É uma nova oportunidade para fazer coisas incríveis.",
        "Um lindo dia, começando com café da manhã, música, boas energias, bom humor, pessoas de bem e gratidão",
        "A capacidade de enxergar a beleza em cada amanhecer é um alimento que nos dá energia para o dia todo"
      ]
    }
  ]
  
  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSeleciona].frases.length)

    setTextoFrase(`"${allFrases[categoriaSeleciona].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img 
        src={logoImg} 
        alt="logo-img" 
        className='logo'
      />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button 
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSeleciona].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={ () => handleSwitchCategory(index) }
            >
              {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}

    </div>
  )
}

export default App
