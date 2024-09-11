import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Painel - Cadastrando usuários",
    description: "Página de cadastro de usuários",
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
  
export default function Cadastro(){
    return(
        <div>
            <h1>Página de cadastro de clientes</h1>
            <h3>Página para cadastrar clientes no site</h3>
        </div>
    )
}