// bubbling- amra jakhon kono element e event listener add kore kicu kori seta oi element chara or parent sob element porjonto jay-

document.querySelector(".product1").addEventListener("click", (event) => {
    console.log("you have clicked li")
    console.log('li', event.target)
    console.log('li',event.currentTarget)
})

document.querySelector(".products").addEventListener("click", (event) => {
    console.log("you have clicked ul")
    console.log('ul', event.target)
    console.log('ul', event.currentTarget)
    event.stopPropagation
})

document.querySelector("body").addEventListener("click", (event) => {
    console.log("you have clicked li")
    console.log('body', event.target)
    console.log('body',event.currentTarget)
})

// ei bubbling jodi stop korte chai-je step e top korte chai sekhane=event.stopPropagation dite hobe.

// target- target holo jekhan theke event ta trigger hoice sei ta ar currentTarget holo ami je step e aci.