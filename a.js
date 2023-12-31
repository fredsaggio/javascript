function removerDuplicatas(array) {
    let valoresVistos = {};
  
    for (let i = 0; i < array.length; i++) {
      let valorAtual = array[i];
  
      // Verificar se o valor já foi visto
      if (valoresVistos[valorAtual] === undefined) {
        // Se não foi visto, marcar como visto
        valoresVistos[valorAtual] = true;
      } else {
        // Se já foi visto, remover o valor do array
        array.splice(i, 1);
        // Ajustar o índice para evitar pular o próximo elemento
        i--;
      }
    }
  }
  
  // Exemplo de uso
  let meuArray = [1, 2, 3, 3, 2, 4, 5, 6, 5];
  removerDuplicatas(meuArray);
  
  console.log(meuArray); // Resultado esperado: [1, 2, 3, 4, 5, 6]