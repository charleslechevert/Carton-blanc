
const form = document.querySelector(".form-addplayer");
const amount = document.getElementById('amount');
const type = document.getElementById('type');

form.addEventListener("submit", (event) => {
    
    
    const amountValue = amount.value.trim()
    const typeValue = type.value.trim()
   

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

    if(penaltyTypes().find(penaltyType => penaltyType == typeValue.toUpperCase())) {
        console.log("OK")
        setErrorFor(type, "Type d'amendes déjà utilisé")
        event.preventDefault()

    }
    else {
        setSuccessFor(type)
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

function penaltyTypes() {
    let penaltyTypesArray = []
    const penaltyTypes = document.querySelectorAll(".admin__penaltyType")
    for(const penaltyType of penaltyTypes) {
        penaltyTypesArray.push(penaltyType.innerText)
    }
    console.log(penaltyTypesArray)
    return penaltyTypesArray;
}

penaltyTypes()

