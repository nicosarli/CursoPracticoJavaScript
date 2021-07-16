const onClickButtonPriceDiscount = () => {
  const inputPrice = Number(document.getElementById("inputPrice").value);
  const inputDiscount = Number(document.getElementById("inputDiscount").value);
  const finalPrice = inputPrice - inputPrice * (inputDiscount / 100);

  const borrarAnterior = document.getElementById("result");
  borrarAnterior.innerText = "";

  const resultP = document.getElementById("resultParraf");
  resultP.innerText = `El precio final con el descuento incluido es de $${finalPrice}`;
};
