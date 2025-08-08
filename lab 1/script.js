function addition()
{
   var num1= parseInt(document.getElementById("input1").value)
   var num2= parseInt(document.getElementById("input2").value)
   document.getElementById("result").innerHTML=num1 + num2
}
function subtraction()
{
   var num1= document.getElementById("input1").value
   var num2= document.getElementById("input2").value
   document.getElementById("result").innerHTML=num1 - num2
}

function multiplication()
{
   var num1= document.getElementById("input1").value
   var num2= document.getElementById("input2").value
   document.getElementById("result").innerHTML=num1 * num2
}

function division()
{
   var num1= document.getElementById("input1").value
   var num2= document.getElementById("input2").value
   document.getElementById("result").innerHTML=num1 / num2
}

