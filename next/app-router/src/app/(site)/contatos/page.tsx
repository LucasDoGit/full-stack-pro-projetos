import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contatos - NextJS",
    description: "Entre em contato com o Lucas Timoteo",
    keywords: ['NextJS', 'Estudos', 'Sujeito Programador'],
    openGraph: {
      images: ['https://sujeitoprogramador.com/wp-content/uploads/2021/06/thumpost.png']
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      }
    }
  };


export default function Contatos(){
    return(
        <div>
            <h1>Página de contato</h1>
            <span>(41) 2938923-3323</span>
        </div>
    )
}