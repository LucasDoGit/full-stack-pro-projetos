import { Link } from "react-router-dom"

export function About(){
    return(
        <div>
            <h1>Bem vindo a página Sobre</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad dolores, accusantium ullam ab inventore enim, vitae tempore consectetur, praesentium architecto?</p>
            <br/>

            <Link to={"/"}>Ir para Home</Link><br/>
            <Link to="/contact">Contato</Link><br/>
        </div>
    )
}