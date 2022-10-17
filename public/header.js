document.querySelector("[data-dropdown-button]").addEventListener("click", event => {

    //Check si le boutton menu a été touché
    const isDropdownButton = event.target.matches("[data-dropdown-button]")

    let currentDropdown   
    if (isDropdownButton) {
        currentDropdown = event.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

});