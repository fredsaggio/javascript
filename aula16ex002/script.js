/* JEITO 2 DE SE FAZER ESTE CÓDIGO MUDANDO A LÓGICA DE PROGRAMAÇÃO NA FUNCTION */

let num = document.querySelector('input#inumero')
let lista = document.getElementById('itextonumero')
let res = document.querySelector('div#container2')
let valores = []

function isNumero(n) {
    
    return Number(n) >= 1 && Number(n) <= 100

    /* if (Number(n) >= 1 && (Number(n) <= 100)) {
        return true
    } else {
        return false
    }
     Este é um código igual o de cima, porém usando if/else */
}

function inLista(n, l) {

    return l.includes(Number(n))

    /* if(l.indexOf(number(n)) != -1) {
        return true
    } else {
        return false
    }
    
    Código igual o de cima porém utilizando if/else*/
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        

    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = '' /* Eu tinha colocado num.innerHTML, mas é num.value */
    num.focus()

    res.innerHTML = ''
}


function finalizar() {
    if (lista.options.length == 1) {

        alert('Algo de errado não está certo meu caro!')

    } else {

        let sectionaumentar = document.getElementById('containerfirst')
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        let totall = valores.length

        for(let pos in valores) {
            soma += valores[pos] 
            if (valores[pos] > maior) { /* Tem que ficar atento com a lógica, eu só não coloquei o <= ou >= porque o valor só vai de 1 a 100 e não tem como ser igual a 0 para ter essa possibilidade. */
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }

            media = soma / totall

        }
        
        sectionaumentar.style.height = 'calc(40% + 250px)'
        

        res.innerHTML = `<p> Foram um total de ${valores.length} números. </p>`
        res.innerHTML += `<p>A soma de todos dá: ${soma}</p>`
        res.innerHTML += `<p>O maior valor é o: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é o: ${menor}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`

        let testandooo = document.body

        testandooo.style.background = 'purple'

        

    }
}

