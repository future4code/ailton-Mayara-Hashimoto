// Exercicio Um

function one () {
    const myName:string = "May"
    const date:string = "07/04/1989"
    const stg = date.split("/")
    console.log(`Olá, meu nome é ${myName}, nasci no dia ${stg[0]} do mês de ${stg[1]} do ano de ${stg[2]}`)
}
one()
