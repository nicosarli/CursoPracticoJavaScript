const data = document.getElementById("data");

argentina.map(({ name, salary }) => {
  data.innerHTML += `<p><b>${name}:</b> ${salary} U$D</p>`;
});

const medianaTotal = document.getElementById("medianaTotal");
medianaTotal.innerHTML = `<p><b>$${calcularMedianaSalarios(
  salariosArgSortedTotal
)}</b></p>`;

const medianaTop10 = document.getElementById("medianaTop10");
medianaTop10.innerHTML = `<p><b>$${calcularMedianaSalarios(
  salarioArgTop10
)}</b></p>`;
