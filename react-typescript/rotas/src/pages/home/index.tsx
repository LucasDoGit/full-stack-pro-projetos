import { Link } from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>Bem vindo a página home</h1>
            <p>Minha primeira página de navegação</p>
            <br/>
            
            <h2>Pesquise um produto</h2>
            <p>digite /produtct/:id</p>
            <br/>
            <br/>

            <Link to="/about">Sobre</Link><br/>
            <Link to="/contact">Contato</Link><br/>
        </div>
    )
}