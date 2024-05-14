import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {

  return (
    <div className='container'>
      <img 
        src={logoImg} 
        alt="logo-img" 
        className='logo'
      />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bom dia</button>
      </section>

      <button className='button-frase'>Frase</button>

      <p className='textoFrase'>Alguma frase vai vir aqui</p>

    </div>
  )
}

export default App
