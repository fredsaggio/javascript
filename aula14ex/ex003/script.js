function somar() {
    let iniciocount = document.getElementById('iinicio')
    let fimcount = document.getElementById('ifim')
    let passocount = document.getElementById('ipasso')
    let res = document.getElementById('container2')

    if (iniciocount.value.length == 0 || fimcount.value.length == 0 || passocount.value.length == 0) {
        window.alert('Números inválidos!')
        res.innerHTML = 'Valor inválido!'

    } else {
        let iniciocountvalue = Number(iniciocount.value)
        let fimcountvalue = Number(fimcount.value)
        let passocountvalue = Number(passocount.value)

        res.innerHTML = 'Seus passos: <br>'

        if (passocountvalue <= 0) {
            window.alert('valor não aceito.')
            passocountvalue = 1
        }

        if (iniciocountvalue < fimcountvalue) {

            for(let calc = iniciocountvalue; calc <= fimcountvalue; calc += passocountvalue) {

                res.innerHTML += `${calc.toFixed(2)} \u{1F449}`
                
        } }
            
        if (iniciocountvalue > fimcountvalue) {

            for (let calc = iniciocountvalue; calc >= fimcountvalue; calc -= passocountvalue) {

                res.innerHTML += `${calc.toFixed(2)} \u{1F449}`
            }
        } 
        
        res.innerHTML += ` \u{1F345} `
    }
}