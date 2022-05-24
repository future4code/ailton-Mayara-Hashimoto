```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salario = 2000
 let comissao = valorTotalVendas * 0.05 + qtdeCarrosVendidos * 100
  return comissao + salario

}