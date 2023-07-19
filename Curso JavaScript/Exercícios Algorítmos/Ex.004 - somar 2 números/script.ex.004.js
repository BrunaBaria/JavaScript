function soma(){
    var tn1 = window.document.querySelector("input#txtn1")
    var tn2 = window.document.querySelector("input#txtn2")
    var Resultado = window.document.querySelector("div#Resultado")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1+n2
    Resultado.innerHTML = `Resultado da soma entre ${n1} e ${n2} é <strong> ${s}</strong>`
}
