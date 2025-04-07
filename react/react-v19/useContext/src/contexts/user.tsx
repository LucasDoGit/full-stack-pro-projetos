import { useState, createContext, useContext, ReactNode } from "react";

interface UserContextType  {
    alunos: string;
    setAlunos: (alunos: string) => void;
    qtdAlunos: number;
}

export const UserContext = createContext({ } as UserContextType)

interface UserProviderProps {
    children: ReactNode;
}

function UserProvider({children}: UserProviderProps){
    const [alunos, setAlunos] = useState("Thiago");
    const [qtdAlunos, setQtdAlunos] = useState(85);

    return(
        <UserContext value={{ alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext>
    )
}

export default UserProvider;