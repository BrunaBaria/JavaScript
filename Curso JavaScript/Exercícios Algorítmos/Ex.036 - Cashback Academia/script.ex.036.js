function calcular(){
    var res = document.getElementById('res')
    var txthoras = document.getElementById('txthoras')
    var horas = Number(txthoras.value)
    var ganho = 0.05
    var recompensa = 0

    if(horas <= 10){
        var recompensa = (horas*2)*ganho
        
    }else if(horas <=20){
        var recompensa = (horas*5)*ganho
    }else{
        var recompensa = (horas*10)*ganho
    }
    res.innerHTML = `Você realizou <strong>${horas} horas</strong> em exercícios e receberá <strong>R$ ${recompensa.toFixed(2).replace('.',',')}</strong>`
}
    
