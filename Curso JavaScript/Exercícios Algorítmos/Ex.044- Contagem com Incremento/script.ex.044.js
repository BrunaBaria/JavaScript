function contar(){
    var c = 2
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')

    var n1= Number(txtn1.value)
    var n2= Number(txtn2.value)

    var res = document.getElementById('res')

    for(var n1;n1<=n2;n1=n1+c){
        res.innerHTML +=` ${n1} `
    }res.innerHTML += ` Acabou!`
}   