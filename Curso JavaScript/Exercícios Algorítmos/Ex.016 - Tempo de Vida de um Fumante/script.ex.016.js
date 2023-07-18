function calcularReducao() {
    var cigarrosPorDia = document.getElementById('cigarrosInput')
    var anosFumados = document.getElementById('anosInput')
    var resultadoReducao = document.getElementById('resultadoReducao')

    var cigd = Number(cigarrosPorDia.value)
    var aFum = Number(anosFumados.value)

    var totalCigarros = cigd * (aFum*365);
    var minutosPerdidos = totalCigarros *10;
    var diasPerdidos = minutosPerdidos / (24*60);

    resultadoReducao.innerHTML = `Você perdeu aproximadamente <strong> ${diasPerdidos.toFixed(1)} </strong> dias de vida devido ao tabagismo.`
 
  }