
class Conta {
    // private: nao pode ser acesado de fora da classe em que foi criado

    private limite: number = 450;

    private aumentarLimite(quantidade: number){
        if(quantidade < 1000){
            this.limite = quantidade;
            console.log(`Agora o seu limite é ${this.limite}`);
        } else {
            console.log("Limite reprovado!");
        }
    }

    protected solicitarLimite(quantidade: number){
        return this.aumentarLimite(quantidade);
    }

    solicitarLimiteApp(autenticado: boolean, quantidade: number): void | boolean {
        if(autenticado){
            this.aumentarLimite(quantidade)
        } else {
            return false
        }
    }
}

class BancoAfiliado extends Conta {
    
    limiteAfiliado(){
        // return this.aumentarLimite() // erro devido ao metodo private
        return this.solicitarLimite(1500)
    }
}

const usuario = new Conta();

usuario.solicitarLimiteApp(true, 700)

console.log(usuario)

const joao = new BancoAfiliado();

console.log(joao)

joao.limiteAfiliado();