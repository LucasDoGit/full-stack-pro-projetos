"use strict";
// heranca
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
// essa classe admin precisa herdar tudo que o usuario possui
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("Alterando cargo.");
    }
}
const usuario1 = new Admin("Lucas", "lucas@teste.com", "Programador", 2);
usuario1.mudarCargo();
