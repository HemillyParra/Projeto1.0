function Area_Retangulo()
{
    var base = Number(document.getElementById("base").value);
    var altura = Number(document.getElementById("altura").value);

    area = (base*altura)
    document.getElementById("result").value = area
}