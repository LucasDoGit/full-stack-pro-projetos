
class Pessoa {
    readonly id: number = 55;
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    mostraID(){
        console.log(`ID do usuário: ${this.id}`);
    }
}

const pessoa1 = new Pessoa("Ana", 21); // acessa as informações da ana mas não consegue modificar o ID
// pessoa1.id = 12; // erro ao tentar alterar o ID

pessoa1.mostraID(); // consegue acessar usando metodos 
console.log(pessoa1.id) // consegue acessar diretamente
