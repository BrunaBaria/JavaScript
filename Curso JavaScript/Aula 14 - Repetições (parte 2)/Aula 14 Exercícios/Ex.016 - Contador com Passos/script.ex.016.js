function contar(){
    let res = document.getElementById('res')
    let i = Number(document.getElementById('txti').value)
    let f = Number(document.getElementById('txtf').value)
    let p = Number(document.getElementById('txtp').value)

    if ( i.length == 0 || f.length == 0 || p.length == 0 ){
        res.innerHTML =`Impossível contar`
        //window.alert('[ERRO] Faltam valores!')
    } else {
        res.innerHTML = 'Contando: </br>'
        res.innerHTML = ``
        if ( p <= 0){
            window.alert('Passo inválido! Considerando Passo = 1')
            p = 1 
       }
        if ( i < f ){
            //contagem crescente
            for ( let c = i; c <= f; c += p){
                res.innerHTML +=` ${c}\u{1F449}`	
            }
        } else {
            //contagem descrescente
            for ( c = i; c >= f; c -= p) {
                res.innerHTML +=` ${c}\u{1F449}`	
            }
        }res.innerHTML +=`\u{1F3C1}`
       }
    }
