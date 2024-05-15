import { Link } from "react-router-dom"

import "./header.css";

export function Header(){
    return(
        <header>
            <h2>Lucas Timoteo</h2>
            
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>Sobre</Link>
                <Link to={"/contact"}>Contato</Link>
            </div>
        </header>
    )
}