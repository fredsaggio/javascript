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

        if (iniciocountvalue < fimcountvalue) {

            for(let calc = iniciocountvalue; calc <= fimcountvalue; calc += passocountvalue) {

                res.innerHTML += `<p>${calc} \u{1F449}</p>`
                
        } }
            
        if (iniciocountvalue > fimcountvalue) {

            for (let calc = iniciocountvalue; calc >= fimcountvalue; calc -= passocountvalue) {

                res.innerHTML += `<p>${calc} \u{1F449}</p>`
            }
        } 
        
        res.innerHTML += ` \u{1F345} `
    }
}