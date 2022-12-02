const form = document.querySelector(".form-addplayer");
const descr = document.getElementById('descr');

form.addEventListener("submit", (event) => {
    
    const descrValue = descr.value.trim()


    //what is below can be factorized for sure
    
    if(descrValue.length > 140) {
        setErrorFor(descr, '140 caractères maximum')
        event.preventDefault()
    } else {
        setSuccessFor(descr)
    }
    
})

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'admin__form-subcontainer error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'admin__form-subcontainer success';
}



