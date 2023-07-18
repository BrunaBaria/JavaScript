function calcular(){
    var res = document.getElementById('res')
    var txthoras = document.getElementById('txthoras')
    var horas = Number(txthoras.value)
    var ganho = 0.05
    var recompensa = 0

    if(horas <= 10){
        var recompensa = horas*2
        res.innerHTML = `Você realizou <strong>${horas}</strong> em exercícios e receberá R$ ${recompensa.toFixed(2)}`
    }
}
    
