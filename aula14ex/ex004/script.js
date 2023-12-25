function tabuada() {
    let tabuadanumber = document.getElementById('itabuada')
    let selectvalue = document.getElementById('iselect')

    if (tabuadanumber.value.length == 0) {
        window.alert('Faltam dados!')
    } else {
        let tabuadavalue = Number(tabuadanumber.value)

        selectvalue.innerHTML = ''

        for(let c = 1; c < 11; c++) {
            let tabuadaoption = document.createElement('option')
            tabuadaoption.value = `valor ${c}`
            tabuadaoption.text = `${tabuadavalue} x ${c} = ${tabuadavalue * c}`
            selectvalue.appendChild(tabuadaoption)
        }
    }
}