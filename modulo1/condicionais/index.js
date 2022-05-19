// PARTE 1
// Exercício 1
// a) O codigo vai identificar a string inicial e transformá-la em numero.
//    em seguida irá dizer se o numero é par ou não.
// b) Caso o numero seja par, ele 'passará' no teste;
// c) Caso o numero seja impar, ele não 'passará' no teste.

// Exercício 2
// a) O codigo prevê que dependendo da fruta escolhida pelo usuario, irá informar o valor da fruta.
// b) Será impresso 2,25
// c) Caso o break seja removido, o valor a ser informado será o preço do default.

// Exercício 3
// a) Primeira linha do codigo, pergunta ao usuario por um numero. Primeira linha do if 
//    indica uma condição de comparação, maior que.
// b) Caso seja maior, a mensagem será 'este numero passou no teste', caso seja menor será 'essa mensagem é secreta'
// c) Talvez, por que ele não usa o else para encerrar o cod.

// PARTE 2
// a) + b) + c)

// let age = Number(prompt("Your age"))
// const drive = (age) => {    
//     if(age >= 18) {
//         console.log("Allowed to drive")
//     } else if(age < 18) {
//         console.log("Not allowed to drive")
//     } else {
//         console.log("Why?")
//     }
// }
// drive(age)

// Exercício 2
// let period = prompt("m for morning, v for afternoon, n for night")
         
//             if("m") {
//                 console.log("Good Morning")
//           } else if("v") {
//                 console.log("Good Afternoon")
//           } else if("n") {
//                 console.log("Good Night")
//           } else {
//                 console.log("Ops.")
//     }
  
// Exercicio 3

    // const helloo = () => {
    //     let greeting = prompt("m para manhã, v para tarde, n para noite")
    //     switch(greeting) {
    //         case 'm':
    //            return `Bom dia`
    //         case 'v':
    //             return `Boa tarde`
    //         case 'n': 
    //             return `Boa noite`
    //     }
    // }
    //      console.log(helloo())

// Exercício 4
// let movie = confirm("Fantasy?")
// let price = confirm("Tiket is R$30!")


// const cinema = (movie, price) => {
//       if(movie && price) {
//       console.log("Enjoy the Movie")
//       } else {
//             console.log("Please, pick another movie?")
//       }
// }

// console.log(cinema(movie, price))

// Desafio
// 1)



const cinema = () => {
    let movie = confirm("Fantasy?")
    let price = confirm("Tiket is R$30!")
    
    if(movie && price) {
        let food = prompt("What ado you want to eat?")
      return console.log(`Enjoy the Movie, and your ${food}`)
      
      } else {
          
      }
      
}

console.log(cinema())
