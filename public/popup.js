const openPopup = document.querySelectorAll('#popup__openButton')
const closePopup = document.querySelectorAll('#popup__cancelButton')
console.log(closePopup)

const overlay = document.querySelectorAll('#popup__overlay')
const popup = document.querySelectorAll('.popup__container')



for(let i =0; i<openPopup.length;i++) {
    openPopup[i].addEventListener('click', () => {
        overlay[i].classList.add('popup__active')
        popup[i].classList.add('popup__active')
    })
    closePopup[i].addEventListener('click',() => {
        overlay[i].classList.remove('popup__active')
        popup[i].classList.remove('popup__active')
    })
}




 