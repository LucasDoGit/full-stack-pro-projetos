
interface pageDetailProps {
    params: {
        id: string;
    }
}

async function getData(id: string) {
    console.log(id)
    const response = await fetch("https://api.github.com/users/LucasDoGit/repos");
    return response.json()
}

export default async function RepositorioID({ params }: pageDetailProps){
    const data = await getData(params.id);

    return(
        <div>
            <h1>Página de detalhes do repositorio</h1>
            <h3>Detalhes do repositório {params.id}</h3>
        </div>
    )
}