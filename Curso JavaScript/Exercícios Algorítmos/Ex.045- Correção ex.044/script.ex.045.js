function contar(){
     let res = document.querySelector('div#res')
     let txtn1= document.querySelector('input#txtn1')
     let txtn2=document.querySelector('input#txtn2')
     let txtn3=document.querySelector('input#txtn3')

     let n1 = Number.parseInt(txtn1.value)
     let n2 = Number.parseInt(txtn2.value)
     let i = Number.parseInt(txtn3.value)
    
     res.innerHTML=``
     if(i<=0){
          window.alert(`O incremento não pode ser menor ou igual a 0.Neste caso, considerarei incremento = 1 `)
          i = 1
     }
     if(n1<n2){
          for(let c=n1;c<=n2;c+=i){
                res.innerHTML +=` ${c} `
          }
     }else{
        for(let c=n1; c>=n2;c-=i)
        res.innerHTML += ` ${c} `
   }res.innerHTML += ` Acabou!` 
}