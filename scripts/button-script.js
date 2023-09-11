const urlParamsOld = new URLSearchParams(window.location.search);
const oldUserParam = urlParamsOld.has('oldUser');

if (oldUserParam) {

    // OLD ===========================================================================
    console.log('id hallo')

    const tekstElementOld = document.getElementById('change-text');

    tekstElementOld.textContent = 'Old User';


    const verwijderenbutton = document.getElementById('newUserSubmit');

    verwijderenbutton.remove();



    const submitButtonformOld = document.getElementById("submitButtonForm");


    const submitButtonElementOld = document.createElement("BUTTON");

    submitButtonElementOld.className += 'submit';

    submitButtonElementOld.innerHTML = 'Submit';

    submitButtonElementOld.id = 'oldUserSubmit';


    submitButtonformOld.appendChild(submitButtonElementOld);

    submitButtonElementOld.addEventListener('click', onSubmitButtonClick);



} 
if (!oldUserParam) {
    // NEW ===================================================================

    const tekstElementNew = document.getElementById('change-text');

    tekstElementNew.textContent = 'New User';

    const verwijderenbutton = document.getElementById('oldUserSubmit');

    verwijderenbutton.remove();

    const submitButtonformNew = document.getElementById("submitButtonForm");


    const submitButtonElementNew = document.createElement("BUTTON");

    submitButtonElementNew.className += 'submit';

    submitButtonElementNew.innerHTML = 'Submit';

    submitButtonElementNew.id = 'oldUserSubmit';

    submitButtonElementNew.addEventListener('click', onSubmitButtonClick);

    submitButtonformNew.appendChild(submitButtonElementNew);


}

function onSubmitButtonClick() {
    window.location = 'index.html';
}