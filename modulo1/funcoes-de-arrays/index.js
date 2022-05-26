// PARTE 1
// Exercício 1
// a) Será impresso uma lista com as informações disponibilozadas;

// Exercício 2
// a) Será retornado no console, apenas uma lista com os nomes informados;

// Exercício 3
// a) Uma lista será retornada no console, menos o apelodo "Chijo"

// PARTE 2
// Exercício 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
 // a)
//  const petNames = pets.map((item) => {
//     console.log(item.nome)
//  })
//  b)
//  const petRaca = pets.filter((pets) => {
//      return pets.raca === "Salsicha"
//  })
// console.log(petRaca)
    
// c)
// const petRacas = pets.filter((pets) => {
//     return pets.raca === "Poodle"
// }).map((petNames) => {
//     return `você ganhou um cupom de 10% de desconto para tosar ${petNames.nome}`
// })
// console.log(petRacas)

// Exercício 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// a)

//  const produtoss = produtos.map((item) => {
//     console.log(item.nome)
//  })

 // b)

//  const desconto = produtos.map((item) => {
//      return {nome: item.nome, preco: (item.preco * 0.95)}
//  })
// console.log(desconto)

// c) 
//  const umSo = produtos.filter((item) => {
//      return item.categoria === "Bebidas"
//  })
// console.log(umSo)

// d)
// const unico = produtos.filter((item) => {
//     return item.nome.includes("Ypê")
// })
// console.log(unico)

// e)

// const ypes = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// }).map((produtos) => {
//     return `Compre ${produtos.nome} por ${produtos.preco}`
// })
// console.log(ypes)

// Challenge

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const ordem = (pokemons) => {
    return pokemons.sort()
}
console.log(ordem)