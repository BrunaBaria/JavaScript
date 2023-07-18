function verificar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var img = document.getElementById('imagem')
    var nota = (n1+n2)/2

        if(nota<= 4.9){
        res.innerHTML = `Reprovado`
        img.src = 'aluno-reprovado.jpg'
        res.style.font = 'bold 14pt'
        }else if (nota <= 6.9){
        res.innerHTML = `Recuperação`
        img.src = 'aluno-exame.jpg'
        res.style.font = 'bold 14pt'
        }else{
        res.innerHTML = `Aprovado`
        img.src = 'aluno-aprovado.jpg'
        res.style.font = 'bold 14pt'
        }
}    