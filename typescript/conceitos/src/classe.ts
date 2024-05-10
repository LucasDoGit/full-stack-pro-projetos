
type Status = "ABERTO" | "FECHADO";

class Loja {
    // atributos
    nome: string;
    categoria: string;

    // toda vez que a classe e cridada passa pelo construtor
    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    // metodos
    criarLoja(): void{
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {

        pedidos.map((pedido) => {
            console.log(`Novo pedido: ${pedido}`);
        })
        return `Pedido na mesa: ${mesa}`;
    }

    mudarStatus(status: Status): void {
        if(status === "ABERTO"){
            console.log("A loja está aberta")
        } else {
            console.log("A loja está fechada!")
        }
    }
}

const redBurguer = new Loja("Red Burguer", "Hamburgueria");

redBurguer.criarLoja()

const retornoLoja = redBurguer.emitirPedido(3, "Smash Burguer", "Suco Gelado", "Salad Hamburguer");
console.log(retornoLoja)

redBurguer.mudarStatus("ABERTO");
