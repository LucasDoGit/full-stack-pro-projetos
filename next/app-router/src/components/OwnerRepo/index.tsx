"use client"
import { useState } from 'react';

import Image from 'next/image'

interface OwnerRepoProps {
    avatar_url: string;
    name: string;
}


export function OwnerRepo({avatar_url, name}: OwnerRepoProps){
    const [show, setShow] = useState(false);

    return(
        <div>
            { show && (
                <>
                    <strong>{name}</strong>
                    <Image 
                        src={avatar_url}
                        alt='Foto de avatar do usuário'
                        width={34}
                        height={34}
                        style={{ borderRadius: 10 }}
                    />
                </>
            )}

            <button onClick={() => setShow(!show) }>
                {show ? "Ocultar nome" : "Mostrar nome"}</button>
        </div>
    )
}