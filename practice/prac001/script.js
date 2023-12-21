
function carregar(){
    var horacerta = document.getElementById('horario');
    var imagemhorario = document.getElementById('imagemm');
    var agora = new Date();
    var teste = agora.getHours();

    horacerta.innerHTML = `<p>Agora são <strong>${teste} horas</strong>.</p>`;

    if (teste >= 4 && teste < 12) {

        horacerta.innerHTML += `<p>Agora é de manhã, sinistro meu cria!</p>`;
        imagemhorario.src = '../imagens/homem-criança.jpg';
        document.body.style.background = 'yellow';

    } else if (teste >= 12 && teste < 18) {

        horacerta.innerHTML += `<p>Agora é de <strong>tarde</strong>, vambora filho!</p>`;
        imagemhorario.src = '../imagens/mulher-jovem.jpg';
        document.body.style.background = 'green';

    } else { 

        horacerta.innerHTML += `<p>Agora é de <strong>noite</strong>, sinistro jow</p>`;
        imagemhorario.src = '../imagens/mulher-idosa.jpg';
        document.body.style.background = 'red';
    }

}

