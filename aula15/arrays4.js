let num = [0, 2, 4, 3, 5, 400, 7, 6, 1]

num.push(9)

num.sort((a, b) => a-b) /* Coloquei uma function de parâmetro para colocar números em ordem, não Strings. */
 
let pos = num.indexOf(2)

console.log(num)        
console.log(`O vetor tem ${num.length} posições!`)              

if (pos == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${pos}!`)
}
