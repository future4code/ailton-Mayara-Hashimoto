// Exercicio Onze

type tipo = {
    letra:string,
    valor:number
}
const list:tipo[]= [
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1} ]

const convert = (num:number) => {
    let numRom:string = "";
    let numNum:number = num
        for ( const item of list ) {
            while (numNum >= item.valor) {
                numRom = numRom + item.letra
                numNum = numNum - item.valor
            }
        }
    return numRom
}
console.table(convert(2022))