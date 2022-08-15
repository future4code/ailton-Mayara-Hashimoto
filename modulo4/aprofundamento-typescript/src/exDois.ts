// Exercicio 2

// a) e c)

type Amostra = {
    numeros: number[],
    obterEstatistica: (numeros:number) => number | void
}

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) as tipagens são numeros (number) e arrays de numeros ([])