function sortear(){
    let res = document.getElementById('res')
    let escolhasPossiveis= ['0','1','2','3','4','5','6','7','8','9','10']
    let c= 0
    let maior5=0
    let divisivel3 =0 
   
   res.innerHTML =''
    while( c < 20 ) {
        let escolhaDoComputador = escolhasPossiveis [ Math.floor( Math.random()*escolhasPossiveis.length)] //Armazenei na [ ] os números sorteados pela máquina. Para pegar valores aleatórios utilize Math.floor(Math.radon()*___) e no ___ você coloca o intervalo que deseja sortear, nesse caso eu coloquei o tamanho das escolhasPossiveis, mas poderia ser valores específicos como (max – min + 1)onde max é o valor máximo e min é o valor mínimo do intervalo...
        res.innerHTML +=` ${escolhaDoComputador} ` //mostra os números sorteados
        if ( escolhaDoComputador > 5){
            ++maior5
        } else if ( escolhaDoComputador % 3 == 0) {
            ++divisivel3
        }
        ++c
    } res.innerHTML +=`</br> Os números sorteados maiores que 5 são ${maior5}`
    res.innerHTML+=`</br> Os números sorteados divisíveis por 3 são ${divisivel3}`
}
    
