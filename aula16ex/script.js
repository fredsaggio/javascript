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
}


function finalizar() {
    if (lista.options.length == 1) {

        alert('Algo de errado não está certo meu caro!')

    } else {

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
    }
        
    const media = calcMedia(valores)
    const maiorValor = Math.max(...valores)
    const menorValor = Math.min(...valores)

    res.innerHTML = `A soma de todos dá: ${somarArray(valores)} <br> <br>`
    res.innerHTML += `O maior valor é o: ${maiorValor} <br> <br>`
    res.innerHTML += `O menor valor é o: ${menorValor} <br> <br> `
    res.innerHTML += `A média dos valores é: ${media}`
}

