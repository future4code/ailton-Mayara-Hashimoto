// Exercicio UM
// a)
// const minhaString:string = 5
// Uma vez sendo atribuido à string, a variavel só poderá receber string;

// b)
// const meuNumero:number = "OneWe"
// Uma vez sendo atribuido à número, a variavel só pode receber numero;

// c) e d)

type Persona = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum Rainbow {
    VERMELHO = "vermelho",
    PRETO = "preto",
    ROXO = "roxo",
    BRANCO = "branco"
}
const pessoaUm:Persona = {
    nome: "Hyunjin",
    idade: 23,
    corFavorita: Rainbow.BRANCO
}
const pessoaDois:Persona = {
    nome: "BangChan",
    idade: 26,
    corFavorita: Rainbow.PRETO
}
const pessoaTres:Persona = {
    nome: "Mayara",
    idade: 33,
    corFavorita: Rainbow.VERMELHO
}



console.table([pessoaUm, pessoaDois, pessoaTres])

