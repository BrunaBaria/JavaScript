function sortear(){
    let res = document.getElementById('res')
    let escolhasPossiveis= ['0','1','2','3','4','5','6','7','8','9','10']
    let c= 0
    let maior5=0
    let divisivel3 =0 
   
   res.innerHTML =''
    while(c<20){
        let escolhaDoComputador = escolhasPossiveis[Math.floor(Math.random()*escolhasPossiveis.length)]
        res.innerHTML +=` ${escolhaDoComputador} `
        if(escolhaDoComputador >5){
            ++maior5
        }else if(escolhaDoComputador % 3==0){
            ++divisivel3
        }
        ++c
    }res.innerHTML +=`</br> Os números sorteados maiores que 5 são ${maior5}`
    res.innerHTML+=`</br> Os números sorteados divisíveis por 3 são ${divisivel3}`
}
    
