```
function contaOcorrencias(arrayDeNumeros,numeroEscolhido) {
   let array = []
   const counter = 0
   let a = numeroEscolhido
   for (let a of arrayDeNumeros) {
     if (a === numeroEscolhido) {
       counter = counter + 1
     }
   }
   if (counter === 0) {
    } return "Numero não encontrado"
  return `O numero ${numeroEscolhido} aparece ${counter}`
   }