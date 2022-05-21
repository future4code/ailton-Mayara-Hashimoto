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

   const jogo = confirm("Welcome, let's play Blackjack!") 
      let carta1 = comprarCarta()
      let carta2 = comprarCarta()
      let carta3 = comprarCarta()
      let carta4 = comprarCarta()
   const jogada1 = carta1.valor + carta2.valor
   const jogada2 = carta3.valor + carta4.valor
   const jogador1 = (number, numbers) =>{
      return `Jogador 1 cartas: ${number} ${numbers} 
points = ${carta1.valor + carta2.valor}`
}
   const jogador2 = (number1, numbers2) =>{
      return `Jogador 2 cartas: ${number1} ${numbers2} 
points = ${carta3.valor + carta4.valor}`
}

 if (confirm("Nova rodada?") === true) {
      console.log("Peça uma carta!")
   }  else if (jogada1 === jogada2) {
    console.log("Empate")
 } if (jogo === true) {
    console.log(` ${jogador1(carta1.valor, carta2.valor)},  
    ${jogador2(carta3.valor, carta4.valor)}`)
 } if (jogada1 > jogada2) {
    console.log("Jogador 1 venceu!")
 } else if (jogada1 < jogada2) {
    console.log("Jogador 2 venceu!")
 } else if (jogo === false) {
    console.log("Não houve jogo!")
 } else {
    console.log("Oh.. Whaaaa...")
 }
 