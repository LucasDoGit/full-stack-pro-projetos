import { use } from "react";

import { UserContext } from "../../contexts/user";

function Nome(){
    // como era feito antes
    // const { alunos, setAlunos } = useContext(UserContext)
    const { alunos, setAlunos} = use(UserContext);

    return(
        <>
            <span style={{ color: '#FF0000' }}>Bem vindo: {alunos}</span>
            <br />
            <button onClick={() => setAlunos("Lucas")}>Trocar nome</button>        
        </>
    );
}

export default Nome;