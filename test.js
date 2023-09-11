
// Eventlistener toevoegen aan de opslaanKnop
document.getElementById("opslaanKnop").addEventListener("click", function () {
    // Gegevens ophalen van de ingevulde velden
    const voornaam = document.getElementById("voornaam").value;
    const achternaam = document.getElementById("achternaam").value;
    const straat = document.getElementById("straat").value;
  
    // Controleer of er al gegevens zijn opgeslagen in de localStorage
    let opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];
  
    // Genereren van een uniek ID (bijvoorbeeld een timestamp)
    const uniekID = new Date().getTime();
  
    // Object maken met gegevens en ID
    const nieuwObject = { id: uniekID, voornaam, achternaam, straat };
  
    // Voeg het nieuwe object toe aan de opgeslagen gegevens
    opgeslagenGegevens.push(nieuwObject);
  
    // Sla de gegevens op in de localStorage
    localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));
  
    // Wis de ingevulde velden
    document.getElementById("voornaam").value = "";
    document.getElementById("achternaam").value = "";
    document.getElementById("straat").value = "";
  
    // Stuur de gebruiker door naar een andere pagina (resultaat.html)
    window.location.href = "resultaat.html";
  });





  // Stap 1: Haal de JSON-gegevens op uit de localStorage
const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

// Stap 2: Werk de array in het object bij door het gewenste element te verwijderen
// Bijvoorbeeld, stel dat je een element wilt verwijderen op basis van de index
const indexToRemove = 2; // Vervang dit door de gewenste index
if (indexToRemove >= 0 && indexToRemove < opgeslagenGegevens.length) {
    opgeslagenGegevens.splice(indexToRemove, 1);
}

// Stap 3: Sla het bijgewerkte object terug op in de localStorage
localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));











































  const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

function onDeleteButtonClick(event) {
    const userId = event.target.id;
    console.log(`Delete button clicked for user with ID: ${userId}`);
    // Voeg hier je logica toe om een gebruiker te verwijderen
}

function onChangeButtonClick(event) {
    const userId = event.target.id;
    console.log(`Change button clicked for user with ID: ${userId}`);
    // Voeg hier je logica toe om een gebruiker te wijzigen
}

for (let i = 0; i < opgeslagenGegevens.length; i++) {
    addUser(opgeslagenGegevens[i]);
}

function addUser(user) {
    console.log(user);

    const userListElement = document.getElementById("resultaten");

    if (userListElement != null) {
        const divElement = document.createElement("DIV");
        const spanElement = document.createElement("SPAN");
        const deleteButtonElement = document.createElement("BUTTON");
        const changeButtonElement = document.createElement("BUTTON");

        deleteButtonElement.setAttribute("id", user.id);
        changeButtonElement.setAttribute("id", user.id);

        deleteButtonElement.innerText = "Delete";
        changeButtonElement.innerText = "Change";

        deleteButtonElement.className += 'deletebutton';
        changeButtonElement.className += 'changebutton';

        divElement.className += 'item';
        spanElement.innerHTML = user.voorletters + " " + user.achternaam;

        divElement.appendChild(spanElement);
        divElement.appendChild(deleteButtonElement);
        divElement.appendChild(changeButtonElement);

        userListElement.appendChild(divElement);

        // Voeg event listeners toe voor de Delete en Change knoppen
        deleteButtonElement.addEventListener('click', onDeleteButtonClick);
        changeButtonElement.addEventListener('click', onChangeButtonClick);
    }
}

const buttonList = document.querySelectorAll('button');

buttonList.forEach((btn) => {
    btn.addEventListener('click', onButtonClick);
});














































function onDeleteButtonClick(event) {
    const userId = event.target.id;
    console.log(`Delete button clicked for user with ID: ${userId}`);

    // Zoek de index van de gebruiker in opgeslagenGegevens op basis van userId
    const indexToRemove = opgeslagenGegevens.findIndex(user => user.id === userId);

    if (indexToRemove !== -1) {
        // Verwijder het element op basis van de gevonden index
        opgeslagenGegevens.splice(indexToRemove, 1);
        console.log(indexToRemove);
        localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

        // Verwijder ook het HTML-element uit de weergave
        event.target.parentElement.remove();
    }
}





// script.js

// Functie om een nieuw uniek nummer te genereren
function genereerUniekNummer() {
  let teller = parseInt(localStorage.getItem("teller")) || 0;
  teller++;
  localStorage.setItem("teller", teller.toString());
  return teller;
}

// Eventlistener toevoegen aan de opslaanKnop
document.getElementById("opslaanKnop").addEventListener("click", function () {
  // Gegevens ophalen van de ingevulde velden
  const voornaam = document.getElementById("voornaam").value;
  const achternaam = document.getElementById("achternaam").value;
  const straat = document.getElementById("straat").value;

  // Uniek nummer genereren
  const uniekID = genereerUniekNummer();

  // ...

  // Sla de gegevens op in de localStorage met het gegenereerde unieke nummer
  const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];
  opgeslagenGegevens.push({ id: uniekID, voornaam, achternaam, straat });
  localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

  // ...
});
