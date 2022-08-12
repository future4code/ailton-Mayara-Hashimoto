// Exercicio Três

enum GENRE {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movies = {
    name:string,
    year:number,
    genre:string,
    points ? : number | undefined
}

const movieOne:Movies = { name: "Harry Potter", year: 2001, genre: GENRE.ACAO, points: 100 }
const movieTwo:Movies = { name: "Titanic", year: 1997, genre: GENRE.DRAMA, points: 64 }
const movieThree:Movies = { name: "Nope", year: 2022, genre: GENRE.TERROR }

console.table([movieOne, movieTwo, movieThree])