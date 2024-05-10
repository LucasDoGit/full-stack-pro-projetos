
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

function setIpServidor(novoIp: string) {
    return (target: any) => { // target é o construtor da nossa classe
        return class extends target{
           ip = novoIp; 
        }
    }
}

@setIpServidor("192.168.2.250")
class Servidor {

}

const serv1 = new Servidor();

console.log(serv1)

