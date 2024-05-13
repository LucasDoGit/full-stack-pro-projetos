import { useState, FormEvent } from 'react';
import './App.css'

import logoImg from './assets/logo.png'

/* 
  Calculo: Alcool / Gasolina
  E se o resultado for menor que 0.7 compensa usar alcool
*/

interface InfoPropos {
  title: string,
  gasolina: string | number,
  alcool: string | number
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [info, setInfo] = useState<InfoPropos>()

  function calcular(event: FormEvent){
    event.preventDefault();
    
    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7){
      setInfo({
        title: "Compensa usar alcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })
    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img src={logoImg} alt="Logo" className='logo' />
        <h1 className='title'>Qual a melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Alcool (preço por litro):</label>
          <input
            className='input'
            type="number"
            placeholder='4,90'
            min="1"
            step="0.01"
            required 
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />
          
          <label>Gasolina (preço por litro):</label>
          <input
            className='input'
            type="number"
            placeholder='4,90'
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input type="submit" value="Calcular" className='button' />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>
              {info.title}
            </h2>
            <span>Alcool: {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>
        )}

      </main>
    </div>    
  )
}

export default App
