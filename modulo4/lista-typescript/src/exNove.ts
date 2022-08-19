// Exercicio Nove

const anagram = () => {
    const palavra = "notas"
    let result = 1
        for (let i = 1; i <= palavra.length; i++) {
            result = result * i
        }
        return result
}

console.table(anagram())