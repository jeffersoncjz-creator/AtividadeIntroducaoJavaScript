function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7.0) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(calcularMedia(7, 8, 9));
