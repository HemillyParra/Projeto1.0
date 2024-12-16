function comparação(){
    var numero1 = Number(document.getElementById("n1").value);
    var numero2 = Number(document.getElementById("n2").value); 

    if(isNaN(numero1) || isNaN(numero2))
    {
        document.getElementById("result").value = "Por favor, insira dois números inteiros.";
    } 
    else{

        if(numero1 === numero2) 
        {
            document.getElementById("result").value = "Os números são iguais.";
        } 
        else if(numero1 > numero2) 
        {
            document.getElementById("result").value = "O número 1 é maior.";
        } 
        else{
            document.getElementById("result").value = "O número 2 é maior."

        }

    }

}