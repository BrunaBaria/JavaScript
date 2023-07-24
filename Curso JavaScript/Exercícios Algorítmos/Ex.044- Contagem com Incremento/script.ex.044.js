function contar(){
    
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var inc = document.getElementById('txtin')

    var n1= Number(txtn1.value)
    var n2= Number(txtn2.value)
    var p = Number(txtin.value)

    var res = document.getElementById('res')
    res.innerHTML = ``
    if (n1<n2){
        for(var c =n1;c<=n2;c+=p){
            res.innerHTML +=` ${c} `
        }
    }else{
        for(c=n1;c>=n2;c-=p){
            res.innerHTML += ` ${c} `
        }
    }res.innerHTML += ` Acabou!`
}   