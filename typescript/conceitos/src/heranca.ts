// heranca
class Usuario {
    protected id: number; // podemos chamar na classe pai e filhos. 
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

// essa classe admin precisa herdar tudo que o usuario possui
class Admin extends Usuario {
    public cargo: string;
    public nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number){
        super(id, nome, email)
        this.cargo = cargo;
        this.nivel = nivel;
    }

    protected mudarCargo(cargo: string): void {
        console.log("Alterando cargo para ", cargo)
        console.log("ID do usuário: ", this.id); // acessa a propriedade id normalmente
    }

    acessarAdmin(){
        this.mudarCargo("Designer");
    }
}

const usuario1 = new Admin(2, "Lucas", "lucas@teste.com", "Programador", 2);

// usuario1.id; // erro devido ao acesso somente na classe pai e fihos.
console.log(usuario1);
usuario1.acessarAdmin();