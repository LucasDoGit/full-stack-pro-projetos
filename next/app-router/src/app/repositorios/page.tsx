"use client"

import { useState, useEffect } from "react"

interface DataProps {
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: string;
      avatar_url: string;
    }
    url: string;
  }


export default function Repositorio(){
    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        function getData(){
            fetch("https://api.github.com/users/LucasDoGit/repos")
            .then(response => response.json() )
            .then((data: DataProps[]) => {
                setData(data)
            })
        }
        
        getData()
    }, [])

    return(
        <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a página home</span>
      <br />

      <h3>Meus repositórios</h3>

      {
        data.map((item) => (
          <section key={item.id}>
            <strong>Repositório:</strong> <a>{item.name}</a>
            <br />
            <br />
          </section>
        ))
      }
    </main>
    )
}