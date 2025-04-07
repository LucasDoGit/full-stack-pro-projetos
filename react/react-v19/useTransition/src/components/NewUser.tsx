import { useState, useTransition } from "react"

export function NewUser(){
    const [name, setName] = useState("");
    const [isPeding, startTransition] = useTransition();
    const [error, setError] = useState("")
    const [user, setUser] = useState("")
    
    async function handleSumbit(){
        startTransition(async () => {
            try {
                await new Promise<void>((resolve, reject) => setTimeout(() => {
                    resolve();
                    // reject("Falha ao cadastrar usuário")
                }, 2500))
                
                setUser("Bem vindo " + name)
            } catch (error) {
                setError(error as string)
            }
        })

    }

    return(
        <>
            <h1>Conhecendo useTransiton</h1>
            
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleSumbit} disabled={isPeding}>
                {isPeding ? "Enviando usuário..." : "Cadastrar"}
            </button>

            {user && <p>{user}</p>}

            {error && <strong>{error}</strong>}
        </>
    )
}