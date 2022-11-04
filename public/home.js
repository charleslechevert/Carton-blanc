var  totalAmount = document.getElementById('totalPenalties').innerText.slice(0,-1)
console.log(totalAmount)
var  totalAmountPaid = document.getElementById('totalPenaltiesPaid').innerText.slice(0,-1)
var percentagePaid = Math.floor(parseInt(totalAmountPaid)/parseInt(totalAmount)*100)
console.log(percentagePaid)
document.querySelector(".home__progressbar-completed").style.width = `${percentagePaid}%`
document.querySelector(".home__progressbar-percentage").innerText = `Pourcentage Payé : ${percentagePaid}%`