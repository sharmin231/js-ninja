// mouse event-
// 1. clicking on a button or element
// 2.hovering over a link
// 3.dragging and dropping
// 4.press the enter key

const li = document.querySelector('.product1')
li.addEventListener('click',(event) => {
    
    // kon element ke target korci seta dekhabe-
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.currentTarget.value)
    event.currentTarget.style.color='violet'
})


// loop chalano- jekono tag dhore select kora jay jehetu tai ek namer tag onek gulo thakle query selectorAll diye tag take select kore tar upore loop chaliye tar sathe event listener add kore dile ek sathe sob element e event handler add hoye jabe-

const allInput = document.querySelectorAll("input")
allInput.forEach(elem => {
    elem.addEventListener("dblclick", (event) => {
        alert("already click koreco")
        console.log(event.currentTarget)
        console.log(event.currentTarget.name)
    })
})

// // form submitting-
const form = document.forms[0];
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const names = document.getElementById('name');
    const email = document.getElementById("email")
    console.log(names.value,email.value)

})

// form.forEach(element=> {
//     element.addEventListener('submit', function (event) {
//         event.preventDefault()
//         console.log(element.value)
//     })
// });

