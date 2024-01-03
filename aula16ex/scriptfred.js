function adicionar() {
    let numbervalue = document.getElementById('inumero')

    if (numbervalue.value.length == 0 || numbervalue.value < 1 || numbervalue.value > 100) {
        alert('Valor inválido!')

    } else {

        let selectt = document.getElementById('itextonumero')
        let teste4 = document.createElement('option')
        let teste2 = Number(numbervalue.value)
        let arrayvalores = [];

        arrayvalores.push(teste2)
                    
        teste4.text = `O valor ${arrayvalores} foi adicionado.`
        selectt.appendChild(teste4)
      
        }
    }

    function finalizar() {
        let selectt = document.getElementById('itextonumero')

        if (selectt.options.length == 1) {

            alert('Adicione algum valor!')

        } else {
            let divresultado = document.getElementById('container2')

            divresultado.text = `<p>Ao todo temos ${arrayvalores.length} números cadastrados.</p>`

            for(let n = 1, bras = arrayvalores[n]; n < arrayvalores.length; n++) {
                
            }
        }
        
    }