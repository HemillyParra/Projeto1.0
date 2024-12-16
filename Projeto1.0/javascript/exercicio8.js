function Somar()
{
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    total = n1 + n2
    document.getElementById("result").value = total
}

function Subtrair()
{
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    total = n1 - n2
    document.getElementById("result").value = total

}

function Multiplicar()
{
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    total = n1 * n2
    document.getElementById("result").value = total
}

function Dividir()
{
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    
    total = n1 / n2 
    document.getElementById("result").value = total

}