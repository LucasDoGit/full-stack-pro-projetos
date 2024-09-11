import Link from "next/link";
import styles from './header.module.css'


export function Header() {
    return(
        <header className={styles.header}>
            <h1>Meu Site</h1>
            <Link href="/">Home</Link> <br />
            <Link href="/contatos">Contato</Link> <br />
            <Link href="/repositorios">Repositorios</Link> <br />
            
            <br/><br/>
            <hr />
        </header>
    )
}