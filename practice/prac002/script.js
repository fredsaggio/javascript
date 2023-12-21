function verificar() { 
    var data = new Date();
    var anoatual = data.getFullYear();

    var caixanumber = document.getElementById('itxtano');
    var res = document.getElementById('container2');
    var idade = anoatual - caixanumber.value
    
    var genero = ''
    var fsex = document.getElementsByName('radsex')

    var imagem = document.getElementById('imagem')

    res.innerHTML = `Sua idade é igual a ${idade}`


    if (caixanumber.value.length == 0 || Number(caixanumber.value) > anoatual) {
        res.innerHTML = `<p>Idade <ins>inválida</ins></p>`
} else {
    if (fsex[0].checked) {

        genero = 'Homem'

        if (idade >= 0 && idade < 10) {
            imagem.src = '../imagens/homem-criança.jpg'
        } else if (idade < 21) {
            imagem.src = '../imagens/homem-jovem.jpg'
        } else if (idade < 50) {
            imagem.src = '../imagens/homem-adulto.jpg'
        } else {
            imagem.src = '../imagens/homem-idoso.jpg'
        }

    } else {
        if (fsex[1].checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                imagem.src = '../imagens/mulher-criança.jpg'
            } else if (idade < 21) {
                imagem.src = '../imagens/mulher-jovem.jpg'
            } else if (idade < 50) {
                imagem.src = '../imagens/mulher-adulta.jpg'
            } else {
                imagem.src = '../imagens/mulher-idosa.jpg'
            }
        }
    }

res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`

} 

}