
const form = document.querySelector(".form-addplayer");
const amount = document.getElementById('amount');

form.addEventListener("submit", (event) => {
    
    console.log("OK")
    const amountValue = amount.value.trim()

    if(amountValue <= 0) {
        setErrorFor(amount, 'La valeur doit être un nombre entier positif')
        event.preventDefault()
    } else if(!Number.isInteger(parseFloat(amountValue))) {
        setErrorFor(amount, 'La valeur doit être un nombre entier positif')
        event.preventDefault()
    }
    else {
        setSuccessFor(amount)
    }

})


function setErrorFor(input, message) {
	const formControl = input.parentElement;
    console.log(formControl)
	const small = formControl.querySelector('small');
	formControl.className = 'admin__form-subcontainer error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'admin__form-subcontainer success';
}