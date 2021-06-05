document.getElementById("genera").addEventListener("click", function() {
    
  var name = document.getElementById("nome").value;
  document.getElementById("bold").innerHTML = name;

  var km = document.getElementById("km").value;

  var scontoType = document.getElementById("age").value;
  document.getElementById("type-fine").innerHTML = scontoType;

  var carrozza = Math.floor(Math.random() * 10) + 1;
  document.getElementById("carrozza").innerHTML = carrozza;

  var codice = Math.floor(Math.random() * 1000000) + 1;
  document.getElementById("codice").innerHTML = codice;

  var costo = km * 0.5;
  document.getElementById("prezzo-fine").innerHTML = costo + "€";
    

  });

  document.getElementById("annulla").addEventListener("click", function() {

    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "Minorenne";

  });