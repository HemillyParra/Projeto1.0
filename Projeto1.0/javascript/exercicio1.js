var valortotal = Number(prompt("Qual o valor total da compra?"))
var quantpar = Number(prompt("Em quantas vezes ira parcelar? no maximo 4 parcelas!!"))

switch(quantpar)
{
    case(1):
    alert("O total da compra deu:" + " " + valortotal)
    break
    
    case(2):
    totalCjuros = valortotal +((valortotal/100)*3)
    valorpar = totalCjuros/2
    alert("O total com juros ficou em:" + " " + totalCjuros)
    alert("O Valor de cada parcela será de:" + " " + valorpar)
    break

    case(3):
    totalCjuros = valortotal + ((valortotal/100)*7)
    valorpar = totalCjuros/3
    alert("O total com juros ficou em:" + " " + totalCjuros)
    alert("O Valor de cada parcela será de:" + " " + valorpar)
    break

    case(4):
    totalCjuros = valortotal + ((valortotal/100)*7)
    valorpar = totalCjuros/4
    alert("O total com juros ficou em:" + " " + totalCjuros)
    alert("O Valor de cada parcela será de:" + " " + valorpar)
    break

}
