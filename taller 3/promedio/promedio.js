const lista1 = [100, 200, 300, 500];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
  sumaLista1 += lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;
console.log(`La suma de la lista es: ${sumaLista1}`);
console.log(`El promedio de la lista es: ${promedioLista1}`);

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  alert(`suma = ${sumaLista} - promedio = ${promedioLista}`);
};

calcularMediaAritmetica(lista1);
