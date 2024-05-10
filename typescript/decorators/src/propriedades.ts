// Propriedade Decorator
function validaNome(tamanho: number){
    // target = construtor da nossa classe
    // key = nossa propriedade
    return (target: any, key: string) => {
        let valor = target[key];

        const getter = () => valor;

        // valida o tamanho da propriedade
        const setter = (value: string) => {
            if(value === ""){
                console.log("Você não pode cadastrar em branco!")
            } else if(value.length < tamanho) {
                console.log(`Digite um nome com mais de ${tamanho} caracteres`)
            } else {
                valor = value;                
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}


class Jogo {

  @validaNome(5)  
  nome: string;
  @validaNome(15)
  titulo: string;

  constructor(nome: string, titulo: string) {
    this.nome = nome;
    this.titulo = titulo;
  }
}

const jogo1 = new Jogo("Left 4 dead 2", "Jogo de tiro contra zombies");

console.log(jogo1.nome)
console.log(jogo1.titulo)