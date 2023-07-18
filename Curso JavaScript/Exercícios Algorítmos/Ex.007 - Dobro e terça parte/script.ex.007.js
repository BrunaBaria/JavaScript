
function calcular(){
    var n = document.querySelector("input#numero")
    var n1 = Number(n.value)
    var dobro = n1*2
    var terço = n1/3
    var res = document.getElementById('res')
    
        res.innerHTML = `O dobro de <strong>${n1}</strong> é <strong>${dobro.toFixed(2)}</strong> e a terça parte é <strong>${terço.toFixed(2)}</strong>`
}