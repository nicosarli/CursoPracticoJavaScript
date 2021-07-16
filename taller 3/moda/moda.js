const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map((elemento) => {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

lista1Array = Object.entries(lista1Count).sort((elementoA, elementoB) => {
  return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1];

// *****************************************************************************************************************

const calcularModa = (lista) => {
  const listaCount = {};

  lista.map((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  listaOrdenada = Object.entries(listaCount).sort((elementoA, elementoB) => {
    return elementoA[1] - elementoB[1];
  });

  const moda = listaOrdenada[listaOrdenada.length - 1];
  console.log(
    `El elemento de moda es: ${moda[0]} porque se repite ${moda[1]} veces`
  );
};
