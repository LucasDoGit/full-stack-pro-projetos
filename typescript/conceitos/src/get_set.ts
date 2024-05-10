
class Jogo {
    private servidor: string;
    private id: string = "1234"

    constructor(servidor: string){
        this.servidor = servidor;
    }

    // metodo get
    get getServidorIP(): string{
        return this.servidor
    }

    // metodo set
    set setServidorIP(ip: string) {
        if(this.getServidorIP === ip){
            throw new Error("O novo ip deve ser diferente do antigo.")
        }
        this.servidor = ip;
    }
}

const GTA5 = new Jogo("192.168.3.242")

try {
    GTA5.setServidorIP = "192.168.3.242"
} catch (error: any) {
    console.log("Error: ", error.message)
}

console.log(GTA5.getServidorIP);
