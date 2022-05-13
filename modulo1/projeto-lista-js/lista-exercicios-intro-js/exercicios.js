// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(a, b) {
  let area = (a * b)
  return area
}
console.log(calculaAreaRetangulo2(5,3))

function calculaAreaRetangulo2(c, d) {
  let area = (c * d)
  return area
}
console.log(calculaAreaRetangulo(2,6))
 
// EXERCÍCIO 02
function imprimeIdade(atual, nascimento) {
    let resultado = (atual - nascimento)
    return resultado

}
console.log(imprimeIdade(2020,1990))

function imprimeIdade2(ano1, ano2) {
  let resultado2 = (ano1 - ano2)
  return resultado2

}
console.log(imprimeIdade(2021,1967))

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let calculo = peso / (altura * altura)
  return calculo

}
console.log(calculaIMC(85,1.8))

function calculaIMC2(peso1, altura1) {
  let calculo1 = peso1 / (altura1 * altura1)
  return calculo1

}
console.log(calculaIMC2(70,1.65))
// EXERCÍCIO 04
//   const nome = prompt("Nome")
//   const idade = Number(prompt("Idade"))
//   const email = prompt("Email")
// function imprimeInformacoesUsuario(nome,idade,email) {
//   const infos = `"Meu nome é "${nome}, "tenho "${idade} "anos, e o meu email é" ${email}.`
//    return infos
// }
// console.log(imprimeInformacoesUsuario)
// // EXERCÍCIO 05
// const a = "Azul"
// const b = "Amarelo"
// const c = "Vermelho"
// function imprimeTresCoresFavoritas(a,b,c) {
//   const favoritas = a, b, c
//  return favoritas
// }
// console.log(imprimeTresCoresFavoritas(favoritas))
// EXERCÍCIO 06
 const hi = "oi"
function retornaStringEmMaiuscula(hi) {
 hi = hi.toUpperCase()
 return hi
}
console.log(retornaStringEmMaiuscula(hi))

const fruta = "bAnAnA"
function retornaStringEmMaiuscula(fruta) {
 fruta = fruta.toUpperCase()
 return fruta
}
console.log(retornaStringEmMaiuscula(fruta))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingressos = custo / valorIngresso
  return ingressos

}
console.log(calculaIngressosEspetaculo(3000,100))

function calculaIngressosEspetaculo2(custo1, valorIngresso1) {
  let ingressos1 = custo1 / valorIngresso1
  return ingressos1

}
console.log(calculaIngressosEspetaculo2(5500,50))

// EXERCÍCIO 08


// function checaStringsMesmoTamanho(string1, string2) {
//   const string1 = "ola"
//   const string2 = "abc"
//   string1.lenght === string2.lenght

// }
// console.log(checaStringsMesmoTamanho())

// EXERCÍCIO 09
// const array = ["1, 2, 3"]
// function retornaPrimeiroElemento(array) {
 
//  const numero = array[0]
//  return numero

// }
// console.log(retornaPrimeiroElemento(numero))

// EXERCÍCIO 10
// const array1 = ["1, 2, 3"]
// function retornaUltimoElemento(array1) {
 
//  const numero1 = array1[2]
//  return numero1

// }
// console.log(retornaUltimoElemento(numero1))



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}