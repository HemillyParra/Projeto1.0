function calcular_pagamento()
{
    var total = Number(document.getElementById("valorprod").value);
    var codigo = Number(document.getElementById("codigo").value);

    switch(codigo){
        case(1):
        total1 = ((total/100)*10)
        total2 = total - total1
        document.getElementById("result1").value = total2;
        document.getElementById("result2").value = total1;
        break

        case(2):
        total1 = ((total/100)*5)
        total2 = total - total1
        document.getElementById("result1").value = total2;
        document.getElementById("result2").value = total1;
        break

        case(3):
        total1 = ((total/100)*10)
        total2 = total + total1
        document.getElementById("result1").value = total2;
        document.getElementById("result2").value = "0 de desconto e"+ " " + total1 + " " + "de juros" ;
        break

    }
}