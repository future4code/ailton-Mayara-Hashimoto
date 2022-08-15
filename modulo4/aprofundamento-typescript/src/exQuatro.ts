// Exercicio 4

// a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b)

// const pokemon1 = {
//     name: "Charmander",
//     types: "Fire",
//     healthPoints: 28
//   }
  
//   const pokemon2 = {
//     name: "Bulbasaur",
//     types: "Grass/Poison",
//     healthPoints: 31
//   }
  
//   const pokemon3 = {
//     name: "Squirtle",
//     types: "Water",
//     healthPoints: 35
//   }

// c)
// O processo é similar, a diferença é que em javascript você não precisa
// identificar o tipo do parâmetro.

// d)
// A partir do momento em que é criado o arquivo ts, é criado um arquivo js. No caso a conversão é
// feita de forma automática, a diferença surge na hora de rodar o código.