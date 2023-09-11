const urlParams =  new URLSearchParams(window.location.search);

const userId = urlParams.get("id");

 let gegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

if (urlParams.has('activate') && urlParams.get('activate') === 'true') {
    activatescript();
}

function activatescript() {
    console.log("Waarde van 'id' parameter:", userId);

    const userToChange = gegevens.find(user => user.id == userId);

    console.log("de goed user:", userToChange)

    document.getElementById("voorletters").value = userToChange.voorletters;
    document.getElementById("tussenvoegsel").value = userToChange.tussenvoegsel;
    document.getElementById("achternaam").value = userToChange.achternaam;
    document.getElementById("voornaam").value = userToChange.voornaam;
    document.getElementById("huisnummer").value = userToChange.huisnummer;
    document.getElementById("toevoeging").value = userToChange.toevoeging;
    document.getElementById("straatnaam").value = userToChange.straatnaam;
    document.getElementById("postcode").value = userToChange.postcode;
    document.getElementById("woonplaats").value = userToChange.woonplaats;

    document.getElementById("oldUserSubmit").addEventListener("click", function () {
        saveChanges(userToChange);
    });
}

function saveChanges(userToChange) {
    // Update de gegevens van de gebruiker met de waarden uit de invoervelden
    userToChange.voorletters = document.getElementById("voorletters").value;
    userToChange.tussenvoegsel = document.getElementById("tussenvoegsel").value;
    userToChange.achternaam = document.getElementById("achternaam").value;
    userToChange.voornaam = document.getElementById("voornaam").value;
    userToChange.huisnummer = document.getElementById("huisnummer").value;
    userToChange.toevoeging = document.getElementById("toevoeging").value;
    userToChange.straatnaam = document.getElementById("straatnaam").value;
    userToChange.postcode = document.getElementById("postcode").value;
    userToChange.woonplaats = document.getElementById("woonplaats").value;

    // Zoek de index van de gebruiker in de array en werk de gegevens bij
    const userIndex = gegevens.findIndex(user => user.id == userId);
    gegevens[userIndex] = userToChange;

    // Sla de bijgewerkte gegevens terug op in localStorage
    localStorage.setItem("gegevens", JSON.stringify(gegevens));

    // Geef een melding dat de wijzigingen zijn opgeslagen
    console.log("Wijzigingen zijn opgeslagen!");
}
