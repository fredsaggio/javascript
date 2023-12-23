function resultado() {
    let inicionumber = document.getElementById('iinicio')
    let fimnumber = document.getElementById('ifim')
    let passonumber = document.getElementById('ipasso')
    let res = document.querySelector('div#container2')
    

    if (inicionumber.value.length == 0 || fimnumber.value.length == 0 || passonumber.value.length == 0){
        res.innerHTML = 'Valor inválido!'
        window.alert(`Faltam dados!`)

    } else {
        let inicionumbervalue = Number(inicionumber.value)
        let fimnumbervalue = Number(fimnumber.value)
        let passonumbervalue = Number(passonumber.value)

        res.innerHTML = `Seus passos: <br> <br>`

        if (passonumbervalue <= 0) {
            window.alert('Valor inválido, passo 1 será considerado.')
            passonumbervalue = 1
        }

        if (inicionumbervalue < fimnumbervalue) { /* Contagem crescente */

            for(let c = inicionumbervalue; c <= fimnumbervalue; c += passonumbervalue) {
                res.innerHTML += `  ${c.toFixed(1)} \u{1F449}  `
            }

            
        

        } else if(inicionumbervalue > fimnumbervalue) { /* Contagem decrescente */

            for(let b = inicionumbervalue; b >= fimnumbervalue; b -= passonumbervalue){
                res.innerHTML += `  ${b.toFixed(1)} \u{1F449} `
            }
            
            
        }
    
        res.innerHTML += ` \u{1F345} `

    }

    
}