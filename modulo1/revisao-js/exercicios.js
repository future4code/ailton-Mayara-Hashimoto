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
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoA || ladoA === ladoC && ladoA !== ladoB) {
        return "Isósceles"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    }
} 

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior1 = -Infinity
    let maior2 = -Infinity
    let menor1 = Infinity
    let menor2 = Infinity
        for (let num of array) {
            if (num > maior1) {
                maior1 = num
            } if (num < menor1) {
                menor1 = num
            }
        }
        for (let num of array) {
            if (num > maior2 && num !== maior1) {
                maior2 = num
            } if (num < menor2 && num !== menor1) {
                menor2 = num
            }
        }
    const final = [maior2, menor2]
    return final
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {... filme}
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
      ...pessoa,
      nome: "ANÔNIMO"
  }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAut = pessoas.filter((autorizadas) =>{
        return autorizadas.altura >= 1.5 && autorizadas.idade >=15 &&
        autorizadas.idade < 60
    })
    return pessoasAut
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAuto = pessoas.filter((dados) => {
        return dados.idade <= 14 ||  dados.idade > 60 ||  dados.altura < 1.5
    })
    return pessoasNaoAuto
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let cart = contas.map((ObjCliente) => {
        for (let compra of ObjCliente.compras) {
            ObjCliente.saldoTotal = ObjCliente.saldoTotal - compra;
        }
        return {
            ...ObjCliente,
            saldoTotal: ObjCliente.saldoTotal,
            compras: []
        }
    })
    return cart;

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}