var amounts = document.querySelectorAll('.stats__piechart-amount')
var total = 0

//get the total amount
for(amount of amounts) {
    total += parseInt(amount.innerText)
}

//get prop by category and turn into degrees (each element is the sum of itself and previous element of the array)
proportion=[]
sumAmount = 0
for(amount of amounts) {
    sumAmount += parseInt(amount.innerText);
    proportion.push(Math.floor((sumAmount)/total*360));
}


//create string of character to fit conic-gradient synthax
stringForConicGradient = ""
for(let i=0; i<proportion.length;i++) {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    while (randomColor.length != 6) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
    }
    console.log(document.querySelectorAll('.stats__piechart-amount')[i])

    //We use this loop to pass the color to the label below the piechart
    document.querySelectorAll('.stats__piechart-amount')[i].style.background = `#${randomColor}`
    document.querySelectorAll('.stats__perchart-label')[i].style.background = `#${randomColor}`

    if(i==0) {
        stringForConicGradient += `#${randomColor} ${proportion[i]}deg, `
    } else if (i==(proportion.length-1)) {
        stringForConicGradient += `#${randomColor} ${proportion[i-1]}deg`
    }
    else {
        stringForConicGradient += `#${randomColor} ${proportion[i-1]}deg ${proportion[i]}deg, `
    }
}

console.log(stringForConicGradient)



document.querySelector('.stats__piechart').style.background = `conic-gradient(${stringForConicGradient})`