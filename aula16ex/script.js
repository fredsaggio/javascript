function adicionar() {
    let numbervalue = document.getElementById('inumero')

    if (numbervalue.value.length == 0 || numbervalue.value < 1 || numbervalue.value > 100) {
        alert('Valor inválido!')

    } else {

        let selectt = document.getElementById('itextonumero')
        let teste4 = document.createElement('option')
        let arrayvalores = []
        let teste2 = Number(numbervalue.value)


        arrayvalores.push(teste2)

        teste4.text = `O valor ${arrayvalores} foi adicionado.`
        selectt.appendChild(teste4)
      
        }
    }

    function finalizar() {
        let sectionbox = document.getElementById('containerfirst')
        let selectt = document.getElementById('itextonumero')

        if (selectt.options.length == 1) {

            alert('Adicione algum valor!')

        } else {
        }
    }