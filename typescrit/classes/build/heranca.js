"use strict";
// heranca
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
// essa classe admin precisa herdar tudo que o usuario possui
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("Alterando cargo para ", cargo);
        console.log("ID do usuário: ", this.id); // acessa a propriedade id normalmente
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(2, "Lucas", "lucas@teste.com", "Programador", 2);
// usuario1.id; // erro devido ao acesso somente na classe pai e fihos.
console.log(usuario1);
usuario1.acessarAdmin();
