document.getElementById("genera").addEventListener("click", function() {
    
  var name = document.getElementById("nome").value;
  document.getElementById("bold").innerHTML = name;

  var km = document.getElementById("km").value;

  var scontoType = document.getElementById("age").value;
  document.getElementById("type-fine").innerHTML = scontoType;

  var carrozza = Math.floor(Math.random() * 9) + 1;
  document.getElementById("carrozza").innerHTML = carrozza;

  var codice = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;
  document.getElementById("codice").innerHTML = codice;

  var costo = km * 0.21;
  if (scontoType == "Minorenne") {

    costo *= 0.8;
    costo = costo.toFixed(2);
    document.getElementById("prezzo-fine").innerHTML = costo + "€";

} else if (scontoType == "Over 65") {

    costo *= 0.6;
    costo = costo.toFixed(2);
    document.getElementById("prezzo-fine").innerHTML = costo + "€";

} else {

    costo = costo.toFixed(2);
    document.getElementById("prezzo-fine").innerHTML = costo + "€";

}
    

  });

  document.getElementById("annulla").addEventListener("click", function() {

    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "Minorenne";

  });