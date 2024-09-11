import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <p>Parece que esta página que você está tentando acessar não existe</p>
      <Link href="/">Retonar a home</Link>
    </div>
  )
}