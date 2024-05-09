import { aplicarMixins } from './mixin/applyMixin'

class Automovel {
    ligar(): void {
        console.log("Automovel ligado com sucesso")
    }

    desligar(): void {
        console.log("Automovel desligado com sucesso")
    }
}

class Especificacao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao;
    }

}

class Carro {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao {}

aplicarMixins(Carro, [Automovel, Especificacao]) // Criando uma uniao entre os metodos e atributos das classes Automovel e Especifiacao

const gol = new Carro("Gol G4");

// acessando metodos do Automovel
gol.ligar();
gol.desligar();

// atributos da Especificacao
gol.descricao = "Motor 1.0, bancos de couro"

console.log(gol);