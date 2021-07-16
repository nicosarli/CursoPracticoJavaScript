// Codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = (lado) => {
  return lado * 4;
};
console.log(
  `El perimetro del cuadrado mide: ${perimetroCuadrado(ladoCuadrado)} cm`
);

const areaCuadrado = (lado) => {
  return lado * lado;
};
console.log(`El Area del cuadrado mide: ${areaCuadrado(ladoCuadrado)} cm^2`);

console.groupEnd();
// Codigo del cuadrado

// Codigo del triángulo
console.group("Trianglo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  `Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
);
const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}`);

const perimetroTriangulo = (lado1, lado2, base) => {
  return lado1 + lado2 + base;
};
console.log(
  `El perimetro del triángulo es de: ${perimetroTriangulo(
    ladoTriangulo2,
    ladoTriangulo2,
    baseTriangulo
  )}cm`
);

const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};
console.log(
  `El Area del triangulo mide: ${areaTriangulo(
    baseTriangulo,
    alturaTriangulo
  )} cm^2`
);

console.groupEnd();
// Codigo del triángulo

// Codigo del circulo
console.group("Circulo");

const radioCirculo = 4;
console.log(`El radio del circulo miden: ${radioCirculo}cm`);

const diametroCirculo = (radio) => {
  return radio * 2;
};
console.log(`El diametro del circulo es: ${diametroCirculo(radioCirculo)}cm`);

const PI = Math.PI;
console.log(`El numero PI es: ${PI}`);

const perimetroCirculo = (diametro) => {
  diametro = diametroCirculo(radioCirculo);
  return diametro * PI;
};
console.log(`El perimetro del circulo es: ${perimetroCirculo()}cm`);

const areaCirculo = (radio) => {
  return radio * radio * PI;
};
console.log(`El area del circulo es: ${areaCirculo(radioCirculo)}cm`);

console.groupEnd();
// Codigo del circulo

// Aquí interactuamos con el HTML

const calcularPerimetroCuadrado = () => {
  const inputLados = Number(document.getElementById("inputCuadrado").value);

  const perimetro = perimetroCuadrado(inputLados);
  alert(perimetro);
};

const calcularAreaCuadrado = () => {
  const inputLados = Number(document.getElementById("inputCuadrado").value);

  const area = areaCuadrado(inputLados);
  alert(area);
};

const calcularPerimetroTriangulo = () => {
  const inputLadoA = Number(
    document.getElementById("inputTrianguloLadoA").value
  );
  const inputLadoB = Number(
    document.getElementById("inputTrianguloLadoB").value
  );
  const inputBase = Number(document.getElementById("inputTrianguloBase").value);

  const perimetro = perimetroTriangulo(inputLadoA, inputLadoB, inputBase);
  alert(perimetro);
};

const calcularAreaTriangulo = () => {
  const inputBase = Number(document.getElementById("inputTrianguloBase").value);
  const inputAltura = Number(
    document.getElementById("inputTrianguloAltura").value
  );

  const area = areaTriangulo(inputBase, inputAltura);
  alert(area);
};

const calcularPerimetroCirculo = () => {
  const inputRadio = Number(document.getElementById("inputCirculo").value);

  const diametro = diametroCirculo(inputRadio);
  const perimetro = perimetroCirculo(diametro);

  alert(perimetro);
};

const calcularAreaCirculo = () => {
  const inputRadio = Number(document.getElementById("inputCirculo").value);
  const PI = Math.PI;

  const area = areaCirculo(inputRadio) * PI;

  alert(area);
};
