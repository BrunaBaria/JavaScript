function sortear(){
    var res = document.getElementById('res')
    var escolhasPossiveis= ['0','1','2','3','4','5','6','7','8','9','10']
    var escolhaDoComputador = escolhasPossiveis[Math.floor(Math.random()*escolhasPossiveis)]
    var c= 0
   
    for(var i =c;c<=20;c++){
        res.innerHTML+=` ${c} `
        c++
    }
}
    
