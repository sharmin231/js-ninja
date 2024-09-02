// ekta element ke dhore tar parent or sibling ke access korake bujhay-
// nodeChildren and nextSibling e jawa jabe na.

const ulElm = document.querySelector('ul')
// console.log(ulElm)
// console.log(ulElm.children[0].nextElementSibling.nextElementSibling.parentElement)

// kono element ke dhore jodi dynamically kono parent element e ek step e jete chai tahole closest use korte hobe. closest er moddhe ami je element e jete chai tar attribute,class,id likhe debo. tahole oi attribute,class,id related element access krito element  er sob theke kace jeta ace setake pabe.

console.log(ulElm.children[0].nextElementSibling)
console.log(ulElm.children[0].closest('.close').style.backgroundColor='pink')