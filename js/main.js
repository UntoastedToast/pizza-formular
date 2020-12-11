// ----- NEWSLETTER ----- //

function newsletter() {
  var check = window.confirm(
    "Haben Sie bereits unsere Rabattgutscheine abboniert?"
  );
  var rabatt =
    "Abonnieren Sie jetzt unseren Newsletter und erhalten Sie <b>20% Rabatt</b> auf die nächste Bestellung!";

  if (check == false) {
    document.getElementById("rabatt").innerHTML = rabatt;
    document.getElementById("rabatt").className = "rabatt-notice";
  }
}

// ----- TEXT ÄNDERN ----- //

function changeText() {
  document.getElementById("innerLink").innerHTML =
    "<a href='https://piccola-loriginale.de/venloerstr.29.html' target='_blank'>Besuchen</a> Sie unsere Website!";
}

// ----- PERSONENANGABE ----- //

function personenAngabe() {
  // Get Name
  var vname = document.getElementById("vname").value;
  var nname = document.getElementById("nname").value;

  // Check, ob Feld gefüllt ist
  if (vname == "") {
    window.alert("Bitte gebe deinen Vornamen ein.");
  }
  if (nname == "") {
    window.alert("Bitte gebe deinen Nachnamen ein.");
  }

  // Console.log
  console.log("Vorname: " + vname + " " + "Nachname: " + nname);

  // Return Name
  return vname + " " + nname;
}

// ----- PIZZA ----- //

//Array
var pizzaArray = new Array();
pizzaArray["Pizza Salami"] = 6.5;
pizzaArray["Pizza Marinara"] = 6.9;
pizzaArray["Pizza Funghi"] = 6.5;
pizzaArray["Pizza Prosciutto"] = 6.5;
pizzaArray["Pizza Tonno"] = 6.9;
pizzaArray["Pizza Verdura"] = 7.9;
pizzaArray["Pizza Campagnola"] = 6.9;
pizzaArray["Pizza Fantastica (scharf)"] = 8.9;
pizzaArray["Pizza Crema di Balsamico"] = 8.5;

//Checkbox - Pizza
function getPizzaPrice() {
  var PizzaSelected = 0;
  var pizzaForm = document.forms["pizza"];
  var selectedPizza = pizzaForm.elements["selectedPizza"];

  for (var i = 0; i < selectedPizza.length; i++) {
    if (selectedPizza[i].checked) {
      PizzaSelected += pizzaArray[selectedPizza[i].value] || 0;
    }
  }

  console.log(PizzaSelected);
  // Return Pizza Preis
  return parseFloat(PizzaSelected).toFixed(2);
}

function getPizzaName() {
  var pizza = document.forms["pizza"];
  var pizzaName = "";
  var i;
  for (i = 0; i < pizza.length; i++) {
    if (pizza[i].checked) {
      pizzaName = pizzaName + pizza[i].value + " ";
    }
  }

  console.log(pizzaName);
  // Return Pizza Name
  return pizzaName;
}

//DIV Ausgabe
function getPizzaData() {
  var pizzaPrice = getPizzaPrice();
  var pizza = getPizzaName();

  var pizzaPriceDIV = document.getElementById("pizzaPrice");
  var pizzaSelectedDIV = document.getElementById("pizzaSelected");

  pizzaPriceDIV.innerHTML = "<strong>Betrag: </strong>" + pizzaPrice + "€";
  pizzaPriceDIV.className = "ausgabe";

  pizzaSelectedDIV.innerHTML = "<strong>Ihre Auswahl: </strong>" + pizza;
  pizzaSelectedDIV.className = "ausgabe";
}

// ----- TEIGSORTE ----- //

function teigsorteSelected(teig) {
  var teig;
  switch (teig) {
    case "Nothing":
      teig = "keinen Teig";
      console.log("Sie haben keine Auswahl getroffen!");
      document.getElementById("rechnungTeig").innerHTML = teig;
      break;

    case "Weizen":
      teig = "Weizen Teig";
      console.log("Sie haben sich für den Weizen Teig entschieden!");
      document.getElementById("rechnungTeig").innerHTML = teig;
      break;

    case "Vollkorn":
      teig = "Vollkorn Teig";
      console.log("Sie haben sich für den Vollkorn Teig entschieden!");
      document.getElementById("rechnungTeig").innerHTML = teig;
      break;

    case "Vegan":
      teig = "veganen Teig";
      console.log("Sie haben sich für den veganen Teig entschieden!");
      document.getElementById("rechnungTeig").innerHTML = teig;
      break;

    default:
      console.log("Sie haben keine Auswahl getroffen!");
      document.getElementById("rechnungTeig").innerHTML = "Sie haben keine Auswahl getroffen!";
      break;
  }

  var teigSelectedDIV = document.getElementById("teigSelected");

  teigSelectedDIV.innerHTML =
    "Sie haben Sich für " + "<strong>" + teig + "</strong>" + " entschieden.";

  teigSelectedDIV.className = "ausgabe";
}

// ----- ZUTATEN ----- //

//Array
var zutatenArray = new Array();
zutatenArray["Mozzarella"] = 0.5;
zutatenArray["Pilze"] = 1.0;
zutatenArray["Meeresfrüchte"] = 3.0;
zutatenArray["Zucchini"] = 2.5;
zutatenArray["Parma-Schinken"] = 4.5;
zutatenArray["Rucola"] = 1.0;

//Checkbox - Zutaten
function getZutatenPrice() {
  var zutatenSelected = 0;
  var zutatenForm = document.forms["zutaten"];
  var selectedZutaten = zutatenForm.elements["selectedZutaten"];

  for (var i = 0; i < selectedZutaten.length; i++) {
    if (selectedZutaten[i].checked) {
      zutatenSelected += zutatenArray[selectedZutaten[i].value] || 0;
    }
  }

  console.log(zutatenSelected);
  // Return Zutaten
  return parseFloat(zutatenSelected).toFixed(2);
}

function getZutatenName() {
  var zutaten = document.forms["zutaten"];
  var zutatenName = "";
  var i;
  for (i = 0; i < zutaten.length; i++) {
    if (zutaten[i].checked) {
      zutatenName = zutatenName + zutaten[i].value + " ";
    }
  }

  console.log(zutatenName);
  // Return Zutaten Name
  return zutatenName;
}

//DIV Ausgabe
function getZutatenData() {
  var zutatenPrice = getZutatenPrice();
  var zutaten = getZutatenName();

  var zutatenPriceDIV = document.getElementById("zutatenPrice");
  var zutatenSelectedDIV = document.getElementById("zutatenSelected");

  zutatenPriceDIV.innerHTML = "<strong>Betrag: </strong>" + zutatenPrice + "€";
  zutatenPriceDIV.className = "ausgabe";

  zutatenSelectedDIV.innerHTML = "<strong>Ihre Auswahl: </strong>" + zutaten;
  zutatenSelectedDIV.className = "ausgabe";
}

// ----- ZUSTELLUNG ----- //

function getZustellung() {
  // Zustellung Option
  var zustellung = document.forms["zustellung"];
  var zustellungName = "";
  var i;
  for (i = 0; i < zustellung.length; i++) {
    if (zustellung[i].checked) {
      zustellungName = zustellungName + zustellung[i].value + " ";
    }
  }

  var lieferGebühr = document.getElementsByName("lieferungDauer");

  for (var i = 0; i < lieferGebühr.length; i++) {
    if (document.getElementById("zustellungLieferung").checked) {
      document.getElementById("lieferung").style.opacity = "1";
      document.getElementById("lieferung").style.pointerEvents = "auto";
    }

    if (document.getElementById("zustellungAbholung").checked) {
      document.getElementById("lieferung").style.opacity = "0.4";
      document.getElementById("lieferung").style.pointerEvents = "none";
      document.getElementById("lieferung").reset();
    }
  }

  // Return zustellung Name
  console.log(zustellungName);
  return zustellungName;
}

// ----- LIEFERUNGSKOSTEN ----- //

//Array
var lieferungArray = new Array();
lieferungArray["Normale Lieferung"] = 2.5;
lieferungArray["Express Lieferung"] = 3.5;

//Checkbox - Lieferung
function getLieferungBetrag() {
  var lieferungSelected = 0;
  var lieferungForm = document.forms["lieferung"];
  var lieferungDauer = lieferungForm.elements["lieferungDauer"];

  for (var i = 0; i < lieferungDauer.length; i++) {
    if (lieferungDauer[i].checked) {
      lieferungSelected += lieferungArray[lieferungDauer[i].value] || 0;
    }
  }

  console.log(lieferungSelected);
  // Return Lieferung
  return parseFloat(lieferungSelected).toFixed(2);
}

function getLieferungOption() {
  var lieferung = document.forms["lieferung"];
  var lieferungName = "";
  var i;
  for (i = 0; i < lieferung.length; i++) {
    if (lieferung[i].checked) {
      lieferungName = lieferungName + lieferung[i].value + " ";
    }
  }

  // Return Lieferung Name
  return lieferungName;
}

// Ausgabe
function getLieferungData() {
  var lieferungBetrag = getLieferungBetrag();
  var lieferungName = getLieferungOption();

  var lieferungBetragDIV = document.getElementById("gebühr");

  console.log(lieferungName);
  lieferungBetragDIV.value = lieferungBetrag + "€";
}


// ----- RECHNUNG ----- //

function rechnung() {
  var name = personenAngabe();
  var rechnungPizzaPreis = getPizzaPrice();
  var rechnungLieferungPreis = getLieferungBetrag();
  var rechnungPizzaName = getPizzaName();
  var rechnungLieferung = getLieferungOption();

  var gesamtkosten = parseFloat(rechnungPizzaPreis) + parseFloat(rechnungLieferungPreis);

  // Rechnung Ausgabe
  document.getElementById("rechnungPizzaKosten").innerHTML = parseFloat(rechnungPizzaPreis).toFixed(2) + "€";
  document.getElementById("rechnungLieferKosten").innerHTML = parseFloat(rechnungLieferungPreis).toFixed(2) + "€";
  document.getElementById("rechnungKosten").innerHTML = parseFloat(gesamtkosten).toFixed(2) + "€";
  document.getElementById("rechnungPizza").innerHTML = rechnungPizzaName;
  document.getElementById("rechnungLieferung").innerHTML = rechnungLieferung;

  // Hide Formular
  document.getElementById("pizzaFormular").style.opacity = "0.4";
  document.getElementById("pizzaFormular").style.pointerEvents = "none";

  document.getElementById("pizzaFormular").style.display = "none";

  // Remove Hidden Class
  document.getElementById("rechnung").classList.remove("hidden");
  document.getElementById("rechnung").scrollIntoView();

  // Show 'Reload Website' Button
  document.getElementById("reloadWebsite").classList.remove("hidden");

}

