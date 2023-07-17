function calcular(){
    var res = document.getElementById('res')
    var diarias = document.getElementById('txtdia')
    var distancia = document.getElementById('txtkm')
    var fcar =document.getElementsByName('radcar')
    var tipo ='';

    var dias =Number(diarias.value)
    var km = Number(distancia.value)

    var dias_cobrado= 0
    var km_cobrado=0
    var locacao = 0 
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(fcar[0].checked){
        tipo = 'Popular';
        dias_cobrado= dias*90
        img.setAttribute('src','carro-popular.jpg')
        if(km <=100){
            km_cobrado= km*0.20
        }else{
            km_cobrado= km*0.10
        }
    }else if (fcar[1].checked){
        tipo = 'Luxo'
        img.setAttribute('src','carro-luxo.jpg')
            dias_cobrado= dias*150

        if(km <=100){
            km_cobrado= km*0.30
        }else{
            km_cobrado= km*0.25  
        }
    } 
    locacao = dias_cobrado + km_cobrado
    res.innerHTML = `O total à pagar pela locação do veículo <strong>${tipo}</strong> é <strong> R$ ${locacao}</strong>`
    res.appendChild(img)
}