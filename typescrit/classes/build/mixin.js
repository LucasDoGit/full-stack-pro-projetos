"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("Automovel ligado com sucesso");
    }
    desligar() {
        console.log("Automovel desligado com sucesso");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.aplicarMixins)(Carro, [Automovel, Especificacao]); // Criando uma uniao entre os metodos e atributos das classes Automovel e Especifiacao
const gol = new Carro("Gol G4");
// acessando metodos do Automovel
gol.ligar();
gol.desligar();
// atributos da Especificacao
gol.descricao = "Motor 1.0, bancos de couro";
console.log(gol);
