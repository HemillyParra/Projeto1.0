function calc_ir()
{
    var salario = Number(document.getElementById("salario").value)
    
    if(salario <= 1434)
    {
        document.getElementById("result").value = "Sem imposto de renda";
    }
    else if(salario > 1434 && salario <= 2150)
    {
        totalir = (salario/100)*7.5;
        document.getElementById("result").value = totalir;
    }
    else{
        if(salario > 2150 && salario <= 2866 )
        {
            totalir = (salario/100)*15;
            document.getElementById("result").value = totalir;
        }
        else if(salario > 2866 && salario <= 3582 )
        {
            totalir = (salario/100)*22.5;
            document.getElementById("result").value = totalir;
        }
        else if(salario > 3582)
        {
            totalir = (salario/100)*27.5;
            document.getElementById("result").value = totalir;
        }

    }
}