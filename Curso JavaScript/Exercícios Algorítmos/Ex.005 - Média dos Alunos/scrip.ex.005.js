function calcular(){
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var n1 =Number(tn1.value)
    var n2=Number(tn2.value)
    var média = (n1+n2)/2
    
    Resultado.innerHTML =`A média entre ${n1} e ${n2} é <strong> ${média}</strong>`  
    
    var img = document.createElement('img')
    img.setAttribute('src','foto') 

        if(média < 5){
            Resultado.innerHTML += `<p>O aluno está <strong>reprovado</strong></p>`
            img.setAttribute('src','aluno-reprovado.jpg')
        }else if(média < 7){
            Resultado.innerHTML +=`<p>O aluno está de <strong>exame</strong></p>`
            img.setAttribute('src','aluno-exame.jpg')
        }else{
            Resultado.innerHTML +=`<p>O aluno está de <strong>aprovado</strong></p>`
            img.setAttribute('src','aluno-aprovado.jpg')
        }
        Resultado.appendChild(img)
}