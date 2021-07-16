const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

const isPar = (numero) => {
  return numero % 2 === 0;
};

const calcularMediana = (lista) => {
  const mitadLista = parseInt(lista.length / 2);

  const arrayOrdenado = lista.sort((elementoA, elementoB) => {
    elementoA - elementoB;
  });

  let mediana = 0;

  if (isPar(arrayOrdenado.length)) {
    const elementoA = arrayOrdenado[mitadLista - 1];
    const elementoB = arrayOrdenado[mitadLista];
    mediana = calcularMediaAritmetica([elementoA, elementoB]);
    return mediana;
  } else {
    mediana = arrayOrdenado[mitadLista];
    return mediana;
  }
};

const calcularMedianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2);
  if (isPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
};

const salariosArgSortedTop10 = argentina
  .map((persona) => {
    return persona.salary;
  })
  .sort((salaryA, salaryB) => {
    return salaryA - salaryB;
  });

const salariosArgSortedTotal = argentina
  .map((persona) => {
    return persona.salary;
  })
  .sort((salaryA, salaryB) => {
    return salaryA - salaryB;
  });

const spliceStart = parseInt((salariosArgSortedTop10.length * 90) / 100);
const spliceCount = salariosArgSortedTop10.length - spliceStart;
const salarioArgTop10 = salariosArgSortedTop10.splice(spliceStart, spliceCount);

const medianaTop10Arg = calcularMedianaSalarios(salarioArgTop10);
const medianaTotalArg = calcularMedianaSalarios(salariosArgSortedTotal);

console.log({ medianaTop10Arg, medianaTotalArg });
