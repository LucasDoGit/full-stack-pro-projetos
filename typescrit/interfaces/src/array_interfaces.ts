
interface TecnologiaProps {
    id: string,
    nome: string,
    slug?: string[];
}

let tecnologia1: TecnologiaProps = {
    id: '1',
    nome: 'JAVA',
    slug: ["JAVA", "java-do-zero", "java8"]
}

//criar uma interface e outra interface vai herdar a primeira

interface TecnologiaProps {
    id: string,
    nome: string,
    descricao?: string;
}

interface NomesProps {
    tecnologia: TecnologiaProps[]
}

let frontend: NomesProps = {
    tecnologia: [
        { id: '12', nome: 'ReactJS' },
        { id: '1', nome: 'Typescript', descricao: 'tecnologia muito top'}
    ]
}

console.log(frontend.tecnologia)