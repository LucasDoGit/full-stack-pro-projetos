// Tupla nao possui no javascript, apenas no TS

let aluno: [string, number]; // precis seguir essa mesma ordem

aluno = ["Aluno1", 2, /*"Aluno3"*/] // seguindo a nossa tipagem ele nao aceita mais de 2 itens e eles precisam ser uma string e number

console.log(aluno)

let statusPedido: [string, string, string]

statusPedido = ["Em producao", "Saiu para entrega", "Pedido entregue"]

console.log(statusPedido)