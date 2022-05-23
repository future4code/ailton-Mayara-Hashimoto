// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

// function retornaTamanhoArray(array) {
//    return array.length
// }

// EXERCÍCIO 02
// function retornaArrayInvertido(array) {
//     const cor = cores[array.length-1]
//     cores[array.length-1] = cor
//     return array.reverse()
// }
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
    return array.filter((a) => a % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((a) => a % 2 === 0).map(a => a ** 2)
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let numero = -Infinity
   for (let i = 0; i < array.length; i++) {
       if (array[i] > numero) {
           numero = array[i]
       }
   } return numero
}

// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
        if (num1 > num2) {
            maior = num1
            menor = num2
        } else {
            maior = num2
            menor = num1
        } 
    let divisor
    if (maior % menor === 0) {
        divisor = true
    } else if(maior % menor !== 0) {
        divisor = false
        }
    
    let diferencas = maior - menor
    return {maiorNumero: maior, maiorDivisivelPorMenor:divisor, diferenca:diferencas}
} 

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = [];
   for (let i = 0; pares.length < n; i++){
       if (i % 2 === 0) {
           pares.push(i)
       }
   } return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let 
} 

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}