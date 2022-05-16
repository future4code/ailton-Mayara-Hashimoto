// PARTE 1

// Exercício 1
/* a) Matheus Nachtergaele
      Virginia Cavendish
      Canal Globo, horário 14h */

// Exercício 2
// a) Juca. 
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"
// [[Prototype]]: Object
// Juba. 
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"
// [[Prototype]]: Object
// Jubo.
// {nome: 'Jubo', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"
// [[Prototype]]: Object

// b) Ela clona o objeto inicial.

// Exercício 3
// a) False, undefined
// b) False, por que ele não é backender. Undefined por que não foi informado o valor da altura dele.

// PARTE 2
// Exercício 1
//a)
const pessoa = {
    nome: "Mayara",
    apelidos: ["Ma", "Maya"],
    
 }
function frase(obs){
console.log(`Eu sou ${obs.nome}, mas pode me chamar de ${obs.apelidos[0]} ou ${obs.apelidos[1]}`)
}

frase(pessoa)
// b)
let pessoaa = {
    ...pessoa, 
    maisApelidos:["Mama", "Stay"]}

    function frasee(obss){
        console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, 
        ${pessoaa.maisApelidos[0]} ou ${pessoaa.maisApelidos[1]}`)
        }
frasee(pessoaa)

//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, 
// ${pessoaa.maisApelidos[0]} ou ${pessoaa.maisApelidos[1]}`) 

// Exercício 2
// a) + b)
const people = {
    nome: ["Wilma", "Karen"],
    idade: [38, 25],
    profissao: ["Escritora", "Assistente"]
}
console.log(`${people.nome[0]}, ${people.nome[1]}`)
console.log(people.nome[0].length)
console.log(`${people.idade[0]}, ${people.idade[1]}`)
console.log(`${people.profissao[0]}, ${people.profissao[1]}`)
console.log(people.profissao[1].length)


// Exercício 3
let carrinho = [];

const fruta = {
    nome: "Manga",
    disponivel: true
}
const fruta1 = {
    nome: "Kiwi",
    disponivel: true
}
const fruta2 = {
    nome: "Banana",
    disponivel: false
}
function lista(obs){
    carrinho.push(obs);
}

lista(fruta)
lista(fruta1)
lista(fruta2)
console.log(carrinho)