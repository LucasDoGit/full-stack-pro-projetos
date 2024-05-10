import { verificaPessoa } from "./decorators/verificaPessoa";

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    @verificaPessoa(16)
    cadastrarPessoa(){
        console.log(`Bem vindo ${this.nome} ao sistema`)
    }
}

const pessoa1 = new Pessoa("Lucas T");

pessoa1.cadastrarPessoa();