function sortear(){
    var res = document.getElementById('res')
    var n1= document.getElementById('txtn1')
    var escolhaDoUsuario = Number(n1.value)
    var escolhasPossiveis = ['1','2','3','4','5']
    var escolhaDoComputador = escolhasPossiveis[Math.floor(Math.random() * escolhasPossiveis.length)]

    if(escolhaDoUsuario == escolhaDoComputador){
        res.innerHTML=`VOCÊ ACERTOU!!! O número sorteado foi ${escolhaDoComputador}`
    }else{
        res.innerHTML=`NÃO FOI DESSA VEZ...O computador sorteou o número ${escolhaDoComputador}`
    }
}