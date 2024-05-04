
interface CursoProps{
    id: string,
    nome: string,
    preco: number,

    // definir apenas a funcao e apenas o que ela deve esperar e retornar
    promocao: (preco: number) => void
}

function mostraPromocao(preco: number): void {
    console.log(`promoção do curso, por apenas: ${preco}`);
}

const novoCurso: CursoProps = {
    id: '1',
    nome: 'Curso Typescript',
    preco: 129.00,
    promocao: mostraPromocao
}

console.log(novoCurso)
console.log(novoCurso.promocao(119))


// segunda forma de declarar funcoes
interface SomaProps {
    (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
    console.log('Resultado:', valor1  + valor2);

    return valor1 + valor2;
}

const resultado = somaNumeros(15, 10)

console.log('resultado da variavel: ', resultado)