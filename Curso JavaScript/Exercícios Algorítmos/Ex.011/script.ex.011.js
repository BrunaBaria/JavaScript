function calcular(){
    var n1 = document.querySelector('input#txtn1')
    var n2 = document.querySelector('input#txtn2')
    var n3 = document.querySelector('input#txtn3')
    var a = Number(n1.value)
    var b = Number(n2.value)
    var c = Number(n3.value)
    var delta = b**2-4*a*c
    resultado.innerHTML = `O valor de delta é ${delta}` 
 }

 /*
 // delta é b²-4ac
 //equação de 2ºgrau é ax²+bx+c=0 e x=-b+-(raizQ(b²-4ac) )/2a
 var a = Number(window.prompt('Diga o valor de a:'))
 var b = Number(window.prompt('Diga o valor de b:'))
 var c = Number(window.prompt('Diga o valor de c:'))
 var delta = (b**2)-4(a.c)
 document.write(`O valor de delta é ${delta}`) //não rodou
 */