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
// const pessoa = {
//     nome: "Mayara",
//     apelidos: ["Ma", "Maya"],
    
//  }
// function frase(obs){
// console.log(`Eu sou ${obs.nome}, mas pode me chamar de ${obs.apelidos[0]} ou ${obs.apelidos[1]}`)
// }

// frase(pessoa)
// b)
// let pessoaa = {
//     ...pessoa, 
//     maisApelidos:["Mama", "Stay"]}

//     function frasee(obss){
//         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, 
//         ${pessoaa.maisApelidos[0]} ou ${pessoaa.maisApelidos[1]}`)
//         }
// frasee(pessoaa)

//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, 
// ${pessoaa.maisApelidos[0]} ou ${pessoaa.maisApelidos[1]}`) 

// Exercício 2
// a) + b)
// const people = {
//     nome: ["Wilma", "Karen"],
//     idade: [38, 25],
//     profissao: ["Escritora", "Assistente"]
// }
    
// function infos(people){
//     return [people.nome], [people.nome.length], [people.idade], [people.profissao], [people.profissao.length]
// }
// infos(people)

// console.log(`${people.nome[0]}, ${people.nome[1]}`)
// console.log(people.nome[0].length)
// console.log(`${people.idade[0]}, ${people.idade[1]}`)
// console.log(`${people.profissao[0]}, ${people.profissao[1]}`)
// console.log(people.profissao[1].length)


// Exercício 3
// let lista = [];

// const fruta1 = {
//     nome: "Manga",
//     disponivel: false
// }
// const fruta2 = {
//     nome: "Kiwi",
//     disponivel: false
// }
// const fruta3 = {
//     nome: "Banana",
//     disponivel: false
// }
// function lista(obs){
//     carrinho.push(obs);
// // }

// lista(fruta)
// lista(fruta1)
// lista(fruta2)
// console.log(carrinho)

// DESAFIO
// 1.


// function questions(){
//   const user = {
//       name: prompt('Nome'),
//       idade: Number(prompt('Idade')),
//       profissao: prompt('profissao')
//   }
//   console.log(user)
// }
// questions()

// 2.

// const movie1 = {
//     title: "Harry Potter and the Philosopher's Stone",
//     year: 2001
// }
// const movie2 = {
//     title: "Auto da Compadecida",
//     year: 2000
// }
// function dunno(movie1, movie2){
//     compare = movie1.year === movie2.year
//  return compare
    
//     }

// console.log(dunno( movie1, movie2 ))
// function dunno2(movie1, movie2){
//     compare2 = movie1.year < movie2.year
//  return compare2
    
//     }

// console.log(dunno2( movie1, movie2 ))

// Exercício 3






// function sacolao (frutas) {
//     frutas.disponivel = !frutas.disponivel
//     return console.log(frutas)
// }

// sacolao(fruta1)
// sacolao(fruta2)
// sacolao(fruta3)
// console.log(lista)






// let one = 5
// let two = 5

// const comapre = (one, two) => {
//       if (one === two) {
//             console.log("Os numeros são iguais")
//       }
//       else {
//             console.log("Os numeros sao diferentes")
//       }
// }
// comapre(one, two)

// let uno = Number(prompt("Gimme a numba"))
// let duo = Number(prompt("Gimme anotha numba"))
//       const comparee = (uno, duo) =>{
//             if (uno === duo) {
//                   console.log("Equals")
//             }
//             else {
//                   console.log("Different")
//             }
//       }
//       comparee(uno, duo)

// let cond1 = false
// let cond2 = true

// if(cond1) {
//       console.log("entered 1")
// } else if(cond2) {
//       console.log("entered 2")
// } else{
//       console.log("none")
// }
// let cond1 = false
// let cond2 = true

// if(!cond1) {
//       console.log("entered 1")
// } else if(cond2) {
//       console.log("entered 2")
// } else{
//       console.log("none")
// }

// let one = 10
// let two = 25

// const compare = (one, two) => {
//       if(one === two) {
// console.log("equals")
//       } else if (one > two){
//             console.log("One < Two")
//       } else if(one < two) {
//             console.log("One > Two")
//       } else {
//             console.log("Ops.")
//       }
// }
// compare(one, two)

// let paisOrigem = 'Brasil'

// switch(paisOrigem) {
//       case 'Brasil':
//             console.log("Brasileira")
//             break
//       case 'EUA': 
//             console.log("Norte Americano")
//             break
//       case 'Argentina':
//             console.log("Argentino")
//             break
//       default:
//             console.log('Unknown')
//             break
// }

// const firstPkm = prompt("Choos your first pokemon")
//       const returnsPkmType = (pokemon) => {
//             siwtch(pokemon) {
//                   case 'bulbasaur':
//                         return `${pokemon} is plant/venon`
//                   case 'squirtle':
//                         return `${pokemon} is water`
//                   case 'charmander':
//                         return `${pokemon} is FIRE`
//                   default:
//                         return `You better pick Pikachu`
//             }
//       }
//       console.log(returnPkmType(firstPkm))

// const personagem = prompt("Pick one: Luna, Ron, Draco")
// const returnHouse = (personagem) => {
//       if(personagem === "Luna") {
//             return `${personagem} is Ravenclaw`
//       } else { if(personagem === Ron) {
//             return `${personagem} is Gryffindor`
//       } else { (personagem === Draco) ;{
//             return `${personagem} is Slytherin`
//       }
// }
//       console.log(returnHouse(personagem))

let mIdade = confirm("Maior de Idade?")
let completo = confirm("Concluiu ensino medio?")
let nEstuda = confirm("Faz outra faculdade?")

const faculdade = (mIdade, completo, nEstuda) => {
      if(mIdade && completo && nEstuda) {
      console.log("Welcome")
      } else {
            console.log("Sowwy")
      }
}

console.log(faculdade(mIdade, completo, nEstuda))