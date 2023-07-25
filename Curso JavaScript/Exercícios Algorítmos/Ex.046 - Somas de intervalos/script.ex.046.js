function somar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var i = 2
    var res = document.getElementById('res')

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    for(var c=n1;c<=n2;c+=i)
        res.innerHTML+=` +${c} `
        var intervalo = somar(n1,n2);
        res.innerHTML+=` A soma desse intervalo é ${intervalo}`
    
}   