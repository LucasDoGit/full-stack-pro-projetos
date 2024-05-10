"use strict";
// Generics
/*
    >>> Permite criar estruturas que serão adptáveis a varios tipos de dados.
    (Ajudando a reaproveitar melhor o nosso código e deixado mais flexível).

    >>> Podemos usar os generics:
    Funções | Interfaces | Type | Classes
*/
/*
    alguns padroes de generics:

    S => State;
    T => Type;
    K => Key;
    V => Value;
    E => Element;
*/
// definiu um tipo de dado generic "<T>"
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
repo1.setDados("15");
console.log(repo1.getDados());
