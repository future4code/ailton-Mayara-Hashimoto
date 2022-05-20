/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const game = confirm("Welcome, let's play Blackjack!")
let card1 = comprarCarta()
let card2 = comprarCarta()
let card3 = comprarCarta()
let card4 = comprarCarta()
const round1 = card1.valor + card2.valor
const round2 = card3.valor + card4.valor
const gamer = (number, numbers) =>{
return `Player 1 cards: ${number} ${numbers} 
points = ${number.valor + numbers.valor}`
}
const gamer2 = (number1, numbers2) =>{
return `Player 2 cards: ${number1} ${numbers2} 
points = ${number1.valor + numbers2.valor}`
}

 if (confirm("Start new round?") === true) {
      console.log("Nice! Pick a card!")
   }  else if (game === false) {
    console.log("Game Over!")
 } if (game === true) {
    console.log(`Player 1 ${gamer(card1, card2)}, Player 2 ${gamer2(card3, card4)}`)
 } if (round1 < round2) {
    console.log("Player 1 won!")
 } else if (round1 > round2) {
    console.log("Player 2 won!")
 } else if (round1 === round2) {
    console.log("Oh... Another round?")
 } else {
    console.log("Oh.. Whaaaa...")
 }