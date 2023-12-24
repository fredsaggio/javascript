function tabuada() {
    let tabuada = document.getElementById('itabuada')
    let seltabu = document.getElementById('iseltabu')

    if (tabuada.value.length == 0) { /* Esse "if" é bem importante por questões de validação. */

        window.alert('Por favor, digite um número.')

    } else {

        let valuetabuada = Number(tabuada.value)
        seltabu.innerHTML = '' /* Isso aqui é bom para limpar o que tem no select antes de executar novamente. */

        for(let c = 1; c < 11; c++){

            let item = document.createElement('option')
            item.value = `tab${c}` /* Pensei que era com setAttribute mas é com .value */
            item.text = `${valuetabuada} x ${c} = ${c*valuetabuada}` /* pensei que era innerHTMl, mas é .text */
            seltabu.appendChild(item)

        }
    }
}


