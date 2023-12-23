function resultado() {
    var inicionumber = document.getElementById('iinicio')
    var fimnumber = document.getElementById('ifim')
    var passonumber = document.getElementById('ipasso')
    var res = document.querySelector('div#container2')
    

    if (inicionumber.value.length == 0 || fimnumber.value.length == 0) {
        res.innerHTML = 'Valor inválido!'

    } else {
        res.innerHTML = `Seus passos: ${teste.value}`
        do {
            teste++
            res.innerHTML += `${fimnumber.value}`
            
        } while (inicionumber.value <= fimnumber.value)

    
    
    }

    
}