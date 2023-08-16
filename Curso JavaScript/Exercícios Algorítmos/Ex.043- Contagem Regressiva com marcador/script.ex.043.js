function contar(){
    let res = document.getElementById('res')
    let c = 30

    res.innerHTML =''
    while( c >=1 ){
        if(c %4 == 0){
            res.innerHTML += ` [${c}] `
        }else{
            res.innerHTML += ` ${c} `
        }
            c--
    }res.innerHTML += ` Acabou! `
} 