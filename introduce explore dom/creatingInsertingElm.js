// dynamically data add- prothome je data add korbo seta create korbo tar por tar text create korbo tarpor sei text element e append korbo then sei element take jekhane add korte chai take select kjore sekhane append kore debo-

// prothome je tag create korte chai sei tag er nam create korte hobe.
const li = document.createElement('li')
li.className = "product-4"

const liText = document.createTextNode('vegetable')

li.appendChild(liText)
// li.innerText='vegetable'


const ulElm = document.querySelector('#ul')
// last element hisabe add korte chaile-
// ulElm.appendChild(li)
// first element hisabe add korte chaile-
// ulElm.prepend(li)

// onek gulo element er vitor majh khane add korte chaile tar parent element ke select kore insertBefore(new element,je element er upore add korte chai sei element) dite hobe. note:-query selector betito onno seloctor dia select korle insert before pawa jabe na.
secondElm.insertBefore(li)
console.log(ulElm)

// another insert method -insertAdjacentElement vs insertAdjacentHTML