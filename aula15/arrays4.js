let num = [0, 2, 4, 3, 5, 7, 6, 1]

num.push(9)

let pos = num.indexOf(2)

console.log(num)        
console.log(`O vetor tem ${num.length} posições!`)              

if (pos == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${pos}!`)
}