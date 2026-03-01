function calculateMortgage(event) {

  event.preventDefault(); // Evita que el formulario se envíe por defecto

  let cuota = document.forms["fMortgage"]["fcuota"].value;
  let costoinicial = document.forms["fMortgage"]["fvalortotal"].value;
  let interes = document.forms["fMortgage"]["finteres"].value;
  // Reemplazar coma por punto si existe
  if (interes.includes(",")) {
    interes = interes.replace(",", ".");
  }
  let plazoAnio = document.forms["fMortgage"]["fplazo"].value;
  
  const MONTHS_IN_YEAR = 12;

  const mortgage = {
    cuota: 0,
    costoinicial: 0,
    interes: 0,
  };

  mortgage.totalPrestamo = costoinicial - cuota;
  mortgage.totalInteres = mortgage.totalPrestamo * (interes / 100);
  mortgage.cuota = (mortgage.totalPrestamo + mortgage.totalInteres) / (plazoAnio * MONTHS_IN_YEAR);

  outputResult(mortgage);
}

function outputResult(finalMortgage) {
  document.getElementById("omontoprestamo").innerHTML = finalMortgage.totalPrestamo;
  document.getElementById("ocuota").innerHTML = finalMortgage.cuota;
}

function resetearForm() {
  document.forms["fMortgage"].reset();
} 