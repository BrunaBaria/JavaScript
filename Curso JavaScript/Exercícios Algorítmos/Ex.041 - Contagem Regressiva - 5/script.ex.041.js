function contar(){
    var res = document.querySelector('div#res')
    var c = 100
    while(c>=0){
        res.innerHTML += ` ${c} ` 
        c=c-5
    }res.innerHTML +=`ACABOU!`
}