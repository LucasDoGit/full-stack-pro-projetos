
function gerarNumerosSorteio(qtdNumeros){
    if(qtdNumeros < 6 || qtdNumeros > 9) {
        console.log("Esse número não pode ser sorteado, digite entre 6 e 9")
        return [];
    }

    const numeros = [];

    while (numeros.length < qtdNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio)
        }
    }

    return numeros;
}
    

const numeroSorteado = gerarNumerosSorteio(6);

console.log(numeroSorteado)