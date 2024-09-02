const navElm = document.getElementById('nav');
const navElmQuery= document.querySelector('#nav');
console.log(navElmQuery)

// node list vs html collection-
// document.querySelectorAll()- diye node list  collection pawa jabe , jeta ekta array ebong array related sob method ekhane use kora jabe. kintu
// document.getElementByTagName()- diye html collection pawa jabe jeta dekhte array er moton holeo seta array noy. kintu 2ta tei array index dhore element pawa jabe.

const querySelector = document.querySelectorAll('li')
console.log(querySelector)

const tagSelector = document.getElementsByTagName('li')
console.log(tagSelector)

// ekhon ei html collection ke real array te convert korar jonno -
// const convertArray = array.from(tagSelector)

// accessing attributes- kono tag er attributes(class,id) content html pawar joinno-
const ulElem = document.querySelector('ul')
console.log(ulElem)

console.log(ulElem.textContent)
// text content sudhu vitorer text gulo debe.

console.log(ulElem.innerHTML)
// innerHtml html gulo debe.

console.log(ulElem.innerText)
// innerText  same textContent er moton.

console.log(ulElem.getAttribute('class'))
console.log(ulElem.getAttribute('id'))
// attributes er moddhe bole dite hobe class chai naki id chai.

console.log(ulElem.classList)
// class list oi e4lement er vitote under e onnanno element er joto gulo class ace se gulo array akare dibe.

console.log(ulElem.className)
console.log(ulElem.style)