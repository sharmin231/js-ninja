// kono ekta element er data change set korar jonno sei element ke dhore/ ar jodi onek gulo element thake tar vitor er ekta datar value change korte chai tahole node list theke index dhore oi data alada kore tarpor tar data set/change korte hobe-
const aElems = document.querySelectorAll('a')
console.log(aElems)
const aElem = aElems[0];
aElem.textContent = "modify value"
console.log(aElem)

// ar jodi html modify /set korte chai-

aElem.innerHTML = '<span>modify value</span>'
console.log(aElem)

// set attributes-
// aElem.setAttribute('href', 'https://google.com')

// remove attributes-
aElem.removeAttribute('href')

// add class name- agey theke jodi kono class dewa thake tahole seta remove hoye jabe tar jaygay new ta add hobe.ar na thakle new ta add hoye jabe. ei issue fix korar jonno classList er sathe add kore dite hobe.

// aElem.className = 'myClass';
aElem.classList.add('myClass')

// checking class conditionally- amraa element e nirdisto namer kono class ace kina seta check korar jonno-

console.log(aElem.classList.contains('myClass'))
// add id, add css style