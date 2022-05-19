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
  let altura = prompt("Numero")
  let largura = prompt("Numero2")
  let area = altura * largura
console.log(area)
}

 
// EXERCÍCIO 02
function imprimeIdade() {
  let atual = prompt("atual")
  let nascimento = prompt("nascimento")
  let resultado = atual - nascimento
    console.log(resultado)

}



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
 
function imprimeInformacoesUsuario() {
  const nome = prompt("Nome")
  const idade = Number(prompt("Idade"))
  const email = prompt("Email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// // EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
const cores = []
cores [0] prompt("cor 1") 
cores [1] prompt("cor 2") 
cores [2] prompt("cor 3") 
console.log(cores)

}

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


function checaStringsMesmoTamanho(string1, string2) {

 return string1.lenght === string2.lenght

}



// EXERCÍCIO 09
const array = ["1, 2, 3"]
function retornaPrimeiroElemento(array) {
 
 const numero = array[0]
 return numero

}


// EXERCÍCIO 10
function retornaUltimoElemento(array1) {
 
 return array1.pop()

}




// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let array1 = array [0]
  let tamanhoArray = array.lenght
  let ultimo = tamanhoArray - 1
array [0] = array [ultimo]
array [ultimo] = array1

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase().includes(string2.toLowerCase())

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