"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    // metodo get
    get getServidorIP() {
        return this.servidor;
    }
    // metodo set
    set setServidorIP(ip) {
        if (this.getServidorIP === ip) {
            throw new Error("O novo ip deve ser diferente do antigo.");
        }
        this.servidor = ip;
    }
}
const GTA5 = new Jogo("192.168.3.242");
try {
    GTA5.setServidorIP = "192.168.3.242";
}
catch (error) {
    console.log("Error: ", error.message);
}
console.log(GTA5.getServidorIP);
