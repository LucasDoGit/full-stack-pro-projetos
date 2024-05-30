import { ReactNode, createContext, useState } from "react";

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
    mudarNome: (nome: string) => void;
    novoAluno: () => void;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

function UserProvider({ children }: UserProviderProps){
    const [aluno, setAluno] = useState("Lucas Timoteo");
    const [qtdAlunos, setQtdAlunos] = useState(40);

    function mudarNome(nome: string){
        setAluno(nome);
    }

    function novoAluno(){
        setQtdAlunos(alunos => alunos+1)    
    }

    return(
        <UserContext.Provider value={{ aluno, qtdAlunos, mudarNome, novoAluno }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;