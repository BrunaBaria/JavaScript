function calcular(){ 
    var n = window.document.querySelector('input#numero')
    var n1 = Number(n.value)
    var ant =n1-1
    var suc =n1+1
    var res = document.getElementById('res')

    res.innerHTML =(`O número antecessor à <strong>${n1}</strong> é <strong>${ant}</strong> e o número sucessor é <strong> ${suc}</strong>`)
}