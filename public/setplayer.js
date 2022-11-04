

const form = document.querySelector(".form-addplayer");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pseudo = document.getElementById('pseudo');
const email = document.getElementById('email');




form.addEventListener("submit", (event) => {
    
    const fnameValue = fname.value.trim()
    const lnameValue = lname.value.trim()
    const pseudoValue = pseudo.value.trim()
    const emailValue = email.value.trim()

    //what is below can be factorized for sure
    
    if(fnameValue === '') {
        setErrorFor(fname, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(fnameValue.length > 25) {
        setErrorFor(fname, '25 caractères maximum!')
        event.preventDefault()

    } else {
        setSuccessFor(fname)
    }

    if(lnameValue === '') {
        setErrorFor(lname, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(lnameValue.length > 25) {
        setErrorFor(lname, '25 caractères maximum!')
        event.preventDefault()

    } else {
        setSuccessFor(lname)
    }

    if(pseudoValue === '') {
        setErrorFor(pseudo, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(pseudoValue.length > 25) {
        setErrorFor(pseudo, '25 caractères maximum!')
        event.preventDefault()

    } else if(pseudos().find(pseudo => pseudo == pseudoValue.toUpperCase())) {
        setErrorFor(pseudo, 'Pseudo déjà utilisé')
        event.preventDefault()

    } else {
        setSuccessFor(pseudo)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(emailValue.length > 50) {
        setErrorFor(email, '25 caractères maximum!')
        event.preventDefault()

    } else {
        setSuccessFor(email)
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

function pseudos() {
    let pseudosArray = []
    const pseudos = document.querySelectorAll(".admin__pseudo")
    for(const pseudo of pseudos) {
        pseudosArray.push(pseudo.innerText)
    }
    return pseudosArray;
}


