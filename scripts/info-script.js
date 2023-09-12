const urlParams = new URLSearchParams(window.location.search);

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
};