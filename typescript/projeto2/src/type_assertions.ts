// afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// afirmando que o status atual é um numero.
mudaStatus = statusAtual as number;

// OUTRA MANEIRA DE AFIRMAR

mudaStatus = <number>statusAtual

console.log(mudaStatus)

let query: unknown = 'pizza';

let sarchTerm: string = query as string;

console.log("Search TERM ", sarchTerm)