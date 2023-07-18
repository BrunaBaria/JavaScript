function verificar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    res.innerHTML=`Verificando...`
        if(n1>n2){
        res.innerHTML = `O primeiro valor é o maior`
        }else if (n1<n2){
        res.innerHTML = `O segundo valor é o maior`
        }else{
        res.innerHTML = `Não existe valor maior, os dois são iguais`
        }
}    