function calcular(){
    let n = Number(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')

    if ( n.length == 0 ) {
        window.alert('Por favor, digite um número!')
    } else {
        let c = 1
        tab.innerHTML = `` //limpar a tabela
        while ( c <= 10 ) {
            /*
            criei uma variável item para guardar os itens dentro do elemento criado e o parâmetro 'option' são as opções presentes dentro do elemento
            */
            let item = document.createElement('option') //criei um elemento dentro da minha tabela no JS
            item.text = `${n} x ${c} = ${n*c}` //item.text diz que o item é uma string
            item.value = `tab${c}`//cada item da tabela vai receber um valor
            tab.appendChild(item) //para aparecer na tabela, eu chamo a tab e informo que o elemento filho dela vai ser o item
            c++ //incremente o elemento no final
        }
    }
    
}