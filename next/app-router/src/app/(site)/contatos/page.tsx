"use client"

import { useState } from "react"


export default function Contatos(){
    const [user, setUser] = useState("Lucas Timoteo");


    return(
        <div>
            <h1>Página de contato</h1>
            <span>(41) 2938923-3323</span>
            <br/>

            <span>Olá {user}</span>
        </div>
    )
}