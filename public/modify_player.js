const openModify = document.querySelectorAll('#modify__openButton')
const closeModify = document.querySelectorAll('#modify__cancelButton')

const modify__overlay = document.querySelectorAll('#modify__overlay')
const modify = document.querySelectorAll('.modify__container')



for(let i =0; i<openModify.length;i++) {
    openModify[i].addEventListener('click', () => {
        modify__overlay[i].classList.add('modify__active')
        modify[i].classList.add('modify__active')
    })
    closeModify[i].addEventListener('click',() => {
        modify__overlay[i].classList.remove('modify__active')
        modify[i].classList.remove('modify__active')
    })
}



/*------------------------------------*/

const form2 = document.querySelector(".modify__container").querySelector(".form-addplayer");
const fname2 = document.querySelector(".modify__container").querySelector('#fname');
const lname2 = document.querySelector(".modify__container").querySelector('#lname');
const pseudo2 = document.querySelector(".modify__container").querySelector('#pseudo');
const email2 = document.querySelector(".modify__container").querySelector('#email');




form2.addEventListener("submit", (event) => {
    
    const fnameValue = fname2.value.trim()
    const lnameValue = lname2.value.trim()
    const pseudoValue = pseudo2.value.trim()
    const emailValue = email2.value.trim()

    //what is below can be factorized for sure
    
    if(fnameValue === '') {
        setErrorFor(fname2, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(fnameValue.length > 25) {
        setErrorFor(fname2, '25 caractères maximum!')
        event.preventDefault()

    } else {
        setSuccessFor(fname2)
    }

    if(lnameValue === '') {
        setErrorFor(lname2, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(lnameValue.length > 25) {
        setErrorFor(lname2, '25 caractères maximum!')
        event.preventDefault()

    } else {
        setSuccessFor(lname2)
    }

    if(pseudoValue === '') {
        setErrorFor(pseudo2, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(pseudoValue.length > 25) {
        setErrorFor(pseudo2, '25 caractères maximum!')
        event.preventDefault()

    } else if(pseudos().find(pseudo => pseudo == pseudoValue.toUpperCase())) {
        setErrorFor(pseudo2, 'Pseudo déjà utilisé')
        event.preventDefault()

    } else {
        setSuccessFor(pseudo2)
    }

    if(emailValue === '') {
        setErrorFor(email2, 'Le champ ne peut pas être vierge')
        event.preventDefault()
    } else if(emailValue.length > 50) {
        setErrorFor(email2, '25 caractères maximum!')
        event.preventDefault()

    } else {
        setSuccessFor(email2)
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

function pseudos() {
    let pseudosArray = []
    const pseudos = document.querySelectorAll(".admin__pseudo")
    for(const pseudo of pseudos) {
        
        pseudosArray.push(pseudo.innerText)
    }
    return pseudosArray;
}




 