const rows = document.querySelectorAll(".penaltylist__row")
const paid = document.querySelectorAll(".registerlist__form-paidlogo")


const search = document.querySelector('.registerlist__searchbar')
search.addEventListener('keyup', () => {
    const searchValue = search.value
    for(row of rows) {
        const isVisible = row.querySelector('.registerlist__joueur').innerText.toLowerCase().includes(searchValue.toLowerCase())  
        row.classList.toggle('registerlist__hide-row', !isVisible)
        
    }
})


/*-----------------------------------------------------*/

document.querySelector('.registerlist__paidfilter').addEventListener('click', () => {
    document.querySelector('.registerlist__paidfilter').classList.toggle('registerlist__paidfilter--on')
    let i = 0;

    for(row of rows) {
        if(paid[i].getAttribute('src') != 'paid.png' && row.querySelector('.registerlist__joueur').innerText.toLowerCase().includes(search.value.toLowerCase())  ) {
            row.classList.toggle('registerlist__hide-row')
        } else {
            console.log('shey')
        }
        i++
    }
})
