import { Nome } from "../Nome"
import { useContext } from "react"
import { UserContext } from "../contexts/user"

export function Alunos(){
    const {qtdAlunos, mudarNome } = useContext(UserContext);
    return(
        <div>
            <h3>Quantidade de alunos: {qtdAlunos}</h3>
            <button onClick={ () => mudarNome("Thiago Lucas") }>
                Mudar nome para Thiago
            </button>
            <br/>
            <br/>
            <Nome/>

        </div>
    )
}