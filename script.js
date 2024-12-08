const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
document.body.innerHTML += "<h1> 1) všechna čísla </h1>"
numbers.forEach((number) => {
    document.body.innerHTML += `<div>${number}</div>`
})

document.body.innerHTML += "<h1> 2) druhé mocniny </h1>"
numbers.forEach((number) => {
    document.body.innerHTML += `<div>${number * number}</div>`
})

document.body.innerHTML += "<h1> 3) pouze záporná čísla </h1>"
numbers.forEach((number) => {
    if (number<0) {
        document.body.innerHTML += `<div>${number}</div>`
    }
})

document.body.innerHTML += "<h1> 4) absolutní hodnota všech čísel </h1>"
numbers.forEach((number) => {
    if (number<0) {
        document.body.innerHTML += `<div>${number * -1}</div>`
    }else{
        document.body.innerHTML += `<div>${number}</div>`
    }
})

document.body.innerHTML += "<h1> 5) pouze sudá čísla</h1>"
numbers.forEach((number) => {
    if (number%2 == 0) {
        document.body.innerHTML += `<div>${number}</div>`
    }
})

document.body.innerHTML += "<h1> 6) pouze ta čísla, jejichž absolutní hodnota je dělitelná třemi</h1>"
numbers.forEach((number) => {
    if (number%3 == 0) {
        document.body.innerHTML += `<div>${number}</div>`
    }
})
// u dělitelnosti 3 je aboslutní hodnota zbytečná, ne?

document.body.innerHTML += "<h1> 7) jak daleko je každé číslo v seznamu od čísla 5</h1>"
const numberFivePosition = numbers.indexOf(5)
numbers.forEach((number, index) => {
    
    document.body.innerHTML += `<div>${number}: vzdálenost ${numberFivePosition - index}</div>`
    
})

document.body.innerHTML += "<h1> 8) druhé mocniny vzdáleností všech čísel od čísla 5 </h1>"
numbers.forEach((number, index) => {
    
    document.body.innerHTML += `<div>${number}: druhá mocnina vzdálenosti ${(numberFivePosition - index)**2}</div>`
    
})

document.body.innerHTML += "<h1> 9) počet záporných čísel v seznamu </h1>"
var numberOfNegativeNumbers = 0
numbers.forEach((number) => {
    if(number < 0) {
        numberOfNegativeNumbers++
    }

}) 
document.body.innerHTML += numberOfNegativeNumbers

document.body.innerHTML += "<h1> 10) součet všech čísel v poli </h1>"
var sumOfAllNumbers = 0
numbers.forEach((number) => {
    sumOfAllNumbers += number
})
document.body.innerHTML += sumOfAllNumbers

document.body.innerHTML += "<h1> 11) průměr všech čísel v poli </h1>"
document.body.innerHTML += sumOfAllNumbers/numbers.length

document.body.innerHTML += "<h1> 12) součet všech kladných čísel v poli </h1>"
var sumOfPositiveNumbers = 0
numbers.forEach((number) => {
    if(number >0){
        sumOfPositiveNumbers += number
    }
})
document.body.innerHTML += sumOfPositiveNumbers
