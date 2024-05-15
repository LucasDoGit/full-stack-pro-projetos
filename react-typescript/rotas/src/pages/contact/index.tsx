import { Link } from "react-router-dom"

export function Contact(){
    return(
        <div>
            <h1>Bem vindo a página de contatos</h1>
            <h3>Telefone: (41) xxxxx-xxxx email: lucas@teste.com</h3>
            <br/>

            <Link to="/">Ir para home</Link><br/>
            <Link to="/about">Sobre</Link><br/>
        </div>
    )
}