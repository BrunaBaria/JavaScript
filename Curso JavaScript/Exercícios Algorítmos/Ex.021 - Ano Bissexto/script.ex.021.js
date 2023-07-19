function calcular(){
    var txtyear=document.querySelector('input#txtyear')
    var ano = Number(txtyear.value)
    var res=document.querySelector('div#res')
    var ano_bi= ano % 4
    if(ano_bi === 0){
        res.innerHTML=`O ano <strong>${ano} é </strong>Bissexto`
    }else{
        res.innerHTML=`O ano <strong> ${ano} não é</strong> Bissexto`
    }
}