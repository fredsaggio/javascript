let amigo = {nome: 'josé',
idade: 18,
altura: 1.80,
peso: 63.4,
engordar(p){
    this.peso += p 
}}

amigo.engordar(3)

console.log(`O meu amigo se chama ${amigo.nome} e tem ${amigo.altura.toFixed(2)} de altura, além de ter ${amigo.idade} anos.`)

console.log(`Ele também engordou ${amigo.peso} quilos.`)

