/* JEITO 1 DE SE FAZER ESTE CÓDIGO MUDANDO A LÓGICA DE PROGRAMAÇÃO NA FUNCTION FINALIZAR. */

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
        res.innerHTML = ''
        

    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = '' /* Eu tinha colocado num.innerHTML, mas é num.value */
    num.focus()

    
}


function finalizar() {
    if (lista.options.length == 1) {

        alert('Algo de errado não está certo meu caro!')

    } else {

        let sectionaumentar = document.getElementById('containerfirst')

        sectionaumentar.style.height = 'calc(40% + 200px)'

        function somarArray(array) {

            return array.reduce(function (acumulador, elemento) {
                return acumulador + elemento
            })
        }

        function calcMedia(arraydois) {

            const soma = arraydois.reduce(function (acumulador, elemento) {
                return acumulador + elemento 
            })    
                 
            return soma / arraydois.length
        }

        const media = calcMedia(valores)
        const maiorValor = Math.max(...valores)
        const menorValor = Math.min(...valores)

        res.innerHTML = `<p>A soma de todos dá: ${somarArray(valores)}</p>`
        res.innerHTML += `<p>O maior valor é o: ${maiorValor}</p>`
        res.innerHTML += `<p>O menor valor é o: ${menorValor}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`

        let testandooo = document.body

        testandooo.style.background = 'purple'

    }
        
    

}

