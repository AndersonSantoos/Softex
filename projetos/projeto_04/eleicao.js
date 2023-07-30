function iniciarEleicao() {
    let candidatoX = 0;
    let candidatoY = 0;
    let candidatoZ = 0;
    let votosBranco = 0;

    
  while (true) {
    let voto = prompt(
      "Digite o número do candidato para votar (1 para candidato_X, 2 para candidato_Y, 3 para candidato_Z, ou 0 para voto em branco):\n" +
      "Digite 'sair' para finalizar a votação."
    );

    if (voto === 'sair') {
      break;
    }

    if (isNaN(voto) || voto === '') {
      alert("Voto inválido! Por favor, digite apenas o número do candidato (1, 2, 3) ou 0 para voto em branco.");
      continue;
    }

    voto = parseInt(voto);

    switch (voto) {
      case 1:
        candidatoX++;
        break;
      case 2:
        candidatoY++;
        break;
      case 3:
        candidatoZ++;
        break;
      case 0:
        votosBranco++;
        break;
      default:
        alert("Voto nulo! Por favor, vote novamente.");
        break;
    }
  }


  let vencedor = '';
  let maiorVotos = 0;

  if (candidatoX > maiorVotos) {
    maiorVotos = candidatoX;
    vencedor = 'candidato_X';
  }

  if (candidatoY > maiorVotos) {
    maiorVotos = candidatoY;
    vencedor = 'candidato_Y';
  }

  if (candidatoZ > maiorVotos) {
    maiorVotos = candidatoZ;
    vencedor = 'candidato_Z';
  }

  
  alert(
    "Resultados:\n" +
    "-------------------\n" +
    "candidato_X: " + candidatoX + " votos\n" +
    "candidato_Y: " + candidatoY + " votos\n" +
    "candidato_Z: " + candidatoZ + " votos\n" +
    "Votos em branco: " + votosBranco + " votos\n" +
    "Votos nulos: " + (candidatoX + candidatoY + candidatoZ === 0 ? 0 : (candidatoX + candidatoY + candidatoZ + votosBranco)) + " votos\n" +
    "-------------------\n" +
    "Vencedor: " + vencedor
  );
}


iniciarEleicao();









