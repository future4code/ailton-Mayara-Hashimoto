```
function calculaNota(ex, p1, p2) {
  let soma = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)
    if (soma >= 9) {
      return 'A'
    } if (soma < 9 && soma >= 7.5) {
      return 'B'
    } if (soma < 7.5 && soma >= 6) {
      return 'C'
    } if (soma < 6) {
      return 'D'
    }
}