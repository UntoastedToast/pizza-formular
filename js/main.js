function newsletter() {
    var check = window.confirm('Haben Sie bereits unsere Rabattgutscheine abboniert?');
    var rabatt = 'Abonnieren Sie jetzt unseren Newsletter und erhalten Sie <b>20% Rabatt</b> auf die nächste Bestellung!';

    if (check == false) {
        document.getElementById('rabatt').innerHTML = rabatt;
        document.getElementById('rabatt').className = 'rabatt-notice'
    }
}

function lieferKosten() {

    var normal = document.getElementById('normale-lieferung');
    var schnell = document.getElementById('schnelle-lieferung');

    if (normal.checked == true) 
        document.getElementById("gebühr").value = normal.value;
        
    else if (schnell.checked == true)
        document.getElementById("gebühr").value = schnell.value;
    
}

function changeText() {
    document.getElementById("innerLink").innerHTML = "<a href='https://piccola-loriginale.de/venloerstr.29.html' target='_blank'>Besuchen</a> Sie unsere Website!";
}