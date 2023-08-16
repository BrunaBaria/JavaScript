function contar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtn3 = document.getElementById('txtn3')

    var n1= Number(txtn1.value)
    var n2= Number(txtn2.value)
    var i = Number(txtn3.value)

    var res = document.getElementById('res')
    
     res.innerHTML=``
     if(i<=0){
          window.alert(`O incremento não pode ser menor ou igual a 0.Neste caso, considerarei incremento = 1 `)
          i = 1
     }
     if(n1<n2){
          while(n1<=n2){
                res.innerHTML +=` ${n1} `
                n1=n1+i
          }
     }else{
        while(n1>=n2){
          res.innerHTML += ` ${n1} `
          n1=n1-i
        }
        
   }res.innerHTML += ` Acabou!` 
}
     
   