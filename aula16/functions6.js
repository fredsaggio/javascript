function fatorial(n) {
    if (n == 1) {
        return 1
    } else { 
        return n * fatorial(n-1) /* Não entendi o porquê que está fatorando, tenho que entender melhor depois. */
    }
}

console.log(fatorial(4))

/* n! = n * (n-1)! */

