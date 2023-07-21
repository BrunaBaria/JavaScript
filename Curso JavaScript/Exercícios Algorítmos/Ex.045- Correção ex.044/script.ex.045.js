function contar(){
    var c = 2
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtn3 = document.getElementById('txtn3')

    var n1= Number(txtn1.value)
    var n2= Number(txtn2.value)
    var c = Number(txtn3.value)

    var res = document.getElementById('res')

    if( n1>=n2){
        window.alert(`O primeiro valor não pode ser maior ou igual ao segundo valor. Informe outro número para prosseguirmos`)
    }else if(c<=0){
        window.alert(`O incremento não pode ser menor ou igual a 0.Neste caso, considerarei incremento = 1 `)
        var c = 1
        for(var n1;n1<=n2;n1=n1+c){
            res.innerHTML +=` ${n1} `
        }
    }else{
        for(var n1;n1<=n2;n1=n1+c){
            res.innerHTML +=` ${n1} `
        }
    }res.innerHTML += ` Acabou!`
    
}   