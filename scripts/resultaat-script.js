const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

for (var i = 0; i < opgeslagenGegevens.length; i++) {

    addUser(opgeslagenGegevens[i])

}

 
function addUser(user) {

    console.log(user)

    const userListElement = document.getElementById("resultaten");

    if (userListElement != null) {
        // maak de div en zet het op de website
        const divElement = document.createElement("DIV");

        const hElement = document.createElement("DIV");

        const buttonDevElement = document.createElement("DIV")
        
        const deleteButtonElement = document.createElement("BUTTON");
        
        const changeButtonElement = document.createElement("BUTTON");

        const readButtonElement = document.createElement("Button");
        
        deleteButtonElement.setAttribute("id", user.id);

        changeButtonElement.setAttribute("id", user.id);

        readButtonElement.setAttribute("id", user.id);

        deleteButtonElement.innerHTML = `
        <i class="fa fa-trash" aria-hidden="true"></i>
    `;

        changeButtonElement.innerHTML = `
        <i class="fa fa-pencil" aria-hidden="true"></i>
    `;

    readButtonElement.innerHTML = `
    <i class="fa fa-info" aria-hidden="true"></i>
`;

        deleteButtonElement.className += 'delete-button';

        changeButtonElement.className += 'change-button';

        readButtonElement.className += 'read-button';

        divElement.className += 'inside-container';

        hElement.className += 'view-text';

        hElement.innerHTML = user.voorletters + " " + user.tussenvoegsel + " " + user.achternaam;

        divElement.appendChild(hElement);

        buttonDevElement.appendChild(readButtonElement);

        buttonDevElement.appendChild(changeButtonElement);
        
        buttonDevElement.appendChild(deleteButtonElement);

       

        divElement.appendChild(buttonDevElement);
        

        userListElement.appendChild(divElement);

        deleteButtonElement.addEventListener('click', onDeleteButtonClick);
        changeButtonElement.addEventListener('click', onChangeButtonClick);
        readButtonElement.addEventListener('click', onReadButtonClick);

    }

}


function onDeleteButtonClick(event) {
    const userId = event.currentTarget.id;
    console.log(`Delete button clicked for user with ID: ${userId}`);
    console.log(userId);

    // Zoek het object in opgeslagenGegevens op basis van userId
    const userToRemove = opgeslagenGegevens.find(user => user.id == userId);
    console.log(userToRemove);
    console.log(opgeslagenGegevens);

    if (userToRemove) {

        const userIndexToRemove = opgeslagenGegevens.indexOf(userToRemove);

        // Verwijder het object op basis van de gevonden index
        opgeslagenGegevens.splice(userIndexToRemove, 1);
        console.log(`User with ID ${userId} removed.`);

        // Bijwerken van localStorage
         localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

        const parentDiv = event.currentTarget.parentNode.parentNode;
        parentDiv.remove();
    
    
    }
}


function onChangeButtonClick(event) {
    const userId = event.currentTarget.id;
    console.log(`Change button clicked for user with ID: ${userId}`);
    // Voeg hier je logica toe om een gebruiker te wijzigen

    window.location.href = `formulier.html?activate=true&oldUser&id=${userId}`;
    


}

function onReadButtonClick(event) {
    const userId = event.currentTarget.id;

    window.location.href = `info.html?activate=true&id=${userId}`;
}
 



 




















// // resultaat.js

// // Functie om de opgeslagen gegevens uit te lezen en weer te geven op de resultaatpagina
// function toonOpgeslagenGegevens() {
//     const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];
//     const resultaatDiv = document.getElementById("resultaten");
  
//     // Bouw een lijst van voornaam en achternaam
//     const resultaat = opgeslagenGegevens.map(function (gegevens) {
//       return `<p>${gegevens.voornaam} ${gegevens.achternaam}</p>`;
//     });
  
//     // Voeg de lijst toe aan de resultaten div
//     resultaatDiv.innerHTML = resultaat.join('');
//   }
  
//   // Roep de functie aan om opgeslagen gegevens uit te lezen en weer te geven bij het laden van de resultaatpagina
//   toonOpgeslagenGegevens();