import { useFormStatus } from "react-dom"

export function Button(){
    const { pending } = useFormStatus();

    return(
        <>
            <button type="submit" disabled={pending}>
                {pending ? "Carregando dados..." : "Cadastrar"}
            </button>

            {pending && <p>Estamos enviando seu cadastro...</p>}
        </>
    )
}