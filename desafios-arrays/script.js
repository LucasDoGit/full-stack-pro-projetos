/*
1. A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado. 
Exiba essa lista no console quando abrir o index.html.

2. Mostre no console quantos produtos tem nessa lista.

3. Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

4. Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse 
produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto 
caso não exista mostre uma mensagem avisão que o produto não foi encontrado.

5. Remova o segundo item da sua lista.
*/

// Questao 1
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log(`Produtos: ${produtos.join(', ')}.`);

// Questao 2
console.log(`Total de produtos: ${produtos.length}`)

// Questao 3
produtos.find((item, index)=>{
	if(item === 'Mouse'){
		produtos.splice(index, 1);
		console.log(`Produto ${item} removido da lista.`)
		
		console.log(`Produtos restantes: ${produtos.join(', ')}`)
	}
})

// Questao 4
let busca = produtos.find((item)=>{
	if(item === 'Computador'){
		return item;
	} else {
		return false;
	}
})

console.log(busca ? `Produto ${busca} encontrado na lista` : `Produto não encontrado na lista`)

// Questao 5
produtos.splice(1, 1)
console.log(`Produtos: ${produtos.join(', ')}.`);

// ============================================================== //

/* Crie uma lista de apenas numeros 1,3,5,7,0,9

1. Ordene essa lista do menor para o maior.
2. Retire o primeiro numero desta lista.
3. Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
*/
let numeros = [1,3,5,7,0,9];

// ordena os numeros crescente
console.log('Numeros Ordenados: '+ numeros.sort());

// remove o primeiro numero da lista
numeros.shift()

console.log(`Numeros atuais:  ${numeros}`);

// inverte a ordem da lista
console.log('Nova ordem: ' + numeros.reverse())

console.log(`Numeros invertidos ${numeros}`)

/*
Crie uma string que contenha o dia de hoje, exemplo: 

let hoje = '20/07/2019';

1. Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.
*/

let today = new Date();

let day = today.getDate();
let month = (today.getMonth() + 1);
let year = today.getFullYear();

console.log(`Hoje: ${day}/${month}/${year}`)

