const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

const lista1 = [100, 200, 500, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// ****************************************************************************************************************

const calcularMediana = (lista) => {
  const mitadLista = parseInt(lista.length / 2);

  const arrayOrdenado = lista.sort((elementoA, elementoB) => {
    elementoA - elementoB;
  });

  let mediana = 0;

  if (esPar(arrayOrdenado.length)) {
    const elementoA = arrayOrdenado[mitadLista - 1];
    const elementoB = arrayOrdenado[mitadLista];
    mediana = calcularMediaAritmetica([elementoA, elementoB]);
    return mediana;
  } else {
    mediana = arrayOrdenado[mitadLista];
    return mediana;
  }
};
