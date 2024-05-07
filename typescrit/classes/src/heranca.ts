// heranca
class Usuario {
    public nome: string;
    public email: string;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }
}

// essa classe admin precisa herdar tudo que o usuario possui
class Admin extends Usuario {
    public cargo: string;
    public nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number){
        super(nome, email)
        this.cargo = cargo;
        this.nivel = nivel;
    }

    mudarCargo(): void {
        console.log("Alterando cargo.")
    }
}

const usuario1 = new Admin("Lucas", "lucas@teste.com", "Programador", 2);



usuario1.mudarCargo();