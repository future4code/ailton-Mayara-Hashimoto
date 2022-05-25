```
function calculaPrecoTotal(quantidade) {
let um = quantidade * 1.30
let dois = quantidade * 1.00
if (quantidade < 12) {
  return um
} if (quantidade >= 12) {
  return dois
} 

}