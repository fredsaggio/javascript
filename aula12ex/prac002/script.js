function verificar() { 
    var data = new Date();
    var anoatual = data.getFullYear();

    var caixanumber = document.getElementById('itxtano');
    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('container2');
    var idade = anoatual - caixanumber.value

    var genero = ''

    res.innerHTML = `Sua idade é igual a ${idade}`

    if (caixanumber.value.length == 0 || Number(caixanumber.value) > anoatual || caixanumber.value >=0 && caixanumber.value < 1900) {
        res.innerHTML = `<p>Idade <ins>inválida</ins></p>`
} else {
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    
    if (fsex[0].checked) {

        genero = 'Homem'

        if (idade >= 0 && idade < 10) {
            imagem.setAttribute('src', 'homem-criança.jpg')
        } else if (idade < 21) {
            imagem.setAttribute('src', 'homem-jovem.jpg')
        } else if (idade < 50) {
            imagem.setAttribute('src', 'homem-adulto.jpg')
        } else {
            imagem.setAttribute('src', 'homem-idoso.jpg')
        }

    } else {
        if (fsex[1].checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'mulher-criança.jpg')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                imagem.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(imagem)
    

} 

}