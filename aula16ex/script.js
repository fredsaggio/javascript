function adicionar() {
    let numbervalue = document.getElementById('inumero')

    if (numbervalue.value.length == 0 || numbervalue.value < 1 || numbervalue.value > 100) {
        window.alert('Valor inválido!')

    } else {

        let selectt = document.getElementById('itextonumero')
        let teste2 = Number(numbervalue.value)

        let teste3 = [teste2]
        let teste4 = document.createElement('option')

        teste4.text = `O valor ${teste3} foi adicionado.`
        selectt.appendChild(teste4)

        }
    }


function finalizar() {
    let teste = document.getElementById('itextonumero')

    if (teste.value.length == 0) {
        window.alert('Adicione um valor!')

    } else {
        for(let c = )
    }
}
