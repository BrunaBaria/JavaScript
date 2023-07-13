function contar (){
    var ini = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
   
    var res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('[ERRO!] Faltam dados!')
    }else{
        res.innerHTML=`Contando...`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var c= i; c <= f; c+=p){
            res.innerHTML += `${c}`
        }
    }
    }       