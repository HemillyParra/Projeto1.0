function Calc_Notas()
{
var n1 = Number(document.getElementById("n1").value)
var n2 = Number(document.getElementById("n1").value)
var n3 = Number(document.getElementById("n1").value)

var media = (n1 + n2 + n3) / 3;

  if (media >= 6) 
  {
    document.getElementById("result").value = "Aprovado!";
  } else if (media >= 3 && media < 6) 
  {
    document.getElementById("result").value = "Vai para exame";
  } 
  else 
  {
    document.getElementById("result").value = "Reprovado!";
  }
}
