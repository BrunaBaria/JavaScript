function verificar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    
    var a = Number(txtn1.value)
    var b = Number(txtn2.value)
    var c = Number(txtn3.value)


    if(a >0 && b>0 && c>0){
        if (a<b+c && b<a+c && c<a+b){
            res.innerHTML=`Essas retas formam um triângulo`
        }else{
            res.innerHTML=`Essas retas não formam um triângulo`
        }
    }else{
        res.innerHTML=`Informe um valor positivo para a verificação`
    }
}
