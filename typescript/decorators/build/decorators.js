"use strict";
/*
    >>>DECORATORS
    - Class
    - Propriedade
    - Métodos
    - Parâmetros ( BEM POUCO USADO )
    - Getters e Setters (BEM POUCO USADO)

    Adiciona recursos aos itens, também vigia itens e aplicar regras e contratos.

    // como criar um decorator
    - tem uma estrutura parecida com uma funcao
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target = receber o construtor da nossa classe
// function LogInfo(target: any){
//     console.log("Sistema Online");
// }
// >>> Padrao factory (Fabrica) | Função que vai retornar a criacao do decorator
// function LogInfo(mensagem: string){
//     return (target: any) => {
//         console.log(`${mensagem}, ${target}`)
//     }
// }
// @LogInfo("Servidor esta rodando")
// class Sistema{
// }
function setIpServidor(novoIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.168.2.250")
], Servidor);
const serv1 = new Servidor();
console.log(serv1);
