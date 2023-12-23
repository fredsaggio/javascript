function resultado() {
    let inicionumber = document.getElementById('iinicio')
    let fimnumber = document.getElementById('ifim')
    let passonumber = document.getElementById('ipasso')
    let res = document.querySelector('div#container2')
    

    if (inicionumber.value.length == 0 || fimnumber.value.length == 0 || passonumber.value.length == 0){
        res.innerHTML = 'Valor inválido!'

    } else {
        let inicionumbervalue = Number(inicionumber.value)
        let fimnumbervalue = Number(fimnumber.value)
        let passonumbervalue = Number(passonumber.value)

        res.innerHTML = `Seus passos:`

        if (inicionumbervalue < fimnumbervalue) {
            if (inicionumbervalue == 0 || fimnumbervalue == 0 || passonumbervalue ==0) {
                
            }

            for(let c = inicionumbervalue; c <= fimnumbervalue; c += passonumbervalue) {
            res.innerHTML += `  ${c}  `
        }

        } else if(inicionumbervalue > fimnumbervalue) {

            for(let b = inicionumbervalue; b >= fimnumbervalue; b -= passonumbervalue){
                res.innerHTML += `  ${b}  `
            }
        }
    
    
    }

    
}