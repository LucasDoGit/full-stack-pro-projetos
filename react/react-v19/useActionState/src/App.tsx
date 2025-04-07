import { useActionState } from 'react'

function App() {

  async function handleSubmit(prevState: any, formData: FormData){

    await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 2500))

    const nome = formData.get("nome") as string

    console.log(prevState)

    if(nome.length < 4){
      return {
        text: "Digite um nome maior!"
      }
    }

    return {
      text: `Bem vindo ${nome}`
    }

  }

  const [state, formAction, peding] = useActionState(handleSubmit, { text: "Sem nome cadastrado..."})

  return (
    <div>
      <h1>UseActionState</h1>

      <form action={formAction}>
        <input
          type='text'
          placeholder='Digite seu nome'
          name='nome'
        />
        <button type="submit">
          {peding ? "Enviando..." : "Cadastrar"}
        </button>
      </form>

      {state && <h1>{state.text}</h1>}

    </div>
  )
}

export default App
