"use strict";
class ContaBanco {
}
// const conta = new ContaBanco(); // nao pode ser utilizada pois é abastrata
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log(`nova conta fisica criada com sucesso ${dados.nome}`);
        return true;
    }
}
const pessoaFisica = new PessoaFisica();
pessoaFisica.abrirConta({
    nome: "Lucas",
    endereco: "Rua das Flores",
    numero: "1234"
});
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log(`nova conta juridica criada com sucesso ${dados.nome}`);
        return true;
    }
}
const pessoaJuridica = new PessoaFisica();
pessoaJuridica.abrirConta({
    nome: "Thiago",
    endereco: "Rua das Tartarugas",
    numero: "24453"
});
