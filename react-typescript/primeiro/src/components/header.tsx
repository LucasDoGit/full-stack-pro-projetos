import './header.css';

interface HeaderPropos {
    title?: string;
}

export function Header({title = "Curso React + Typescript"}: HeaderPropos) {
    return(
        <header className='header'>
            <h1 className='title'>{title}</h1>

            <hr/>
        </header>
    )
}