function par_ou_impar()
{    
    var numero = Number(document.getElementById("numberint").value)

    numerototal = numero % 2


    if(numerototal === 0)
    {
        texto = par
        return document.getElementById("par").innerHTML = ("par")
    }
    else(numerototal > 0);
    {
    texto = impar
        return document.getElementById("impar").innerHTML = ("impar")
    }
}