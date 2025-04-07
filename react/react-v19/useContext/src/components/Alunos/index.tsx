import { use } from "react";

import { UserContext } from "../../contexts/user";
import Nome from "../Nome";

function Alunos(){
    const validation = true;

    if(validation){
        const { qtdAlunos } = use(UserContext);

        return(
            <>
                <h1>Dentro do IF</h1>
                <br />
                <h2>Quantidade total de alunos: {qtdAlunos}</h2>
                <Nome />
            </>
        );
    }

    const { qtdAlunos } = use(UserContext);

    return(
        <>
            <h2>Quantidade total de alunos: {qtdAlunos}</h2>
            <Nome />
        </>
    );
}

export default Alunos;