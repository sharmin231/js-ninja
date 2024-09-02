// similar onek gulo tag ek sathe thakle ebong tar prottek tay evet handler lagle, proti tay alada kore even handler add na kore tar parent element e add korte hobe and ebong dynamically tar vitorkar je kono element eclick korle sei element ke access korte event.target diye access kora jabe.

// abar tar vitor kar

document.querySelector('ul').addEventListener('click',(event) => {
    // console.log(event.target)
    // if (event.target.tagName === 'LI') {
    //     event.target.style.color="red"
    //     console.log(event.target.textContent)
    if (event.target.matches('li')) {
        if (event.target.innerText === "potato") {
                event.target.style.color="red"
        } else {
            event.target.style.color="blue"
            }
            
            console.log(event.target.textContent)
    }
})
const ul = document.getElementById('ul');
document.querySelector('.btn').addEventListener('click', e => {
    const newLi = document.createElement('li');
    newLi.textContent = 'vegetable';
    ul.prepend(newLi)
})

// adjacent poddhotite add kora-
function add() {
    const li = `<li class="product4">carrot</li>`
    ul.insertAdjacentHTML("beforeend",li)
}
document.querySelector('.btn').addEventListener('click',add)


const third = document.querySelector('ol');
console.log(third.children[2].parentElement)

// clock-----------------------
function clock() {
    const date = new Date();
    let hours = date.getHours();
    console.log(hours)
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? "0" +minutes  : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;

    return `${hours}: ${ minutes}: ${seconds}`
    
}
// document.querySelector("#btn").addEventListener("click", (e) => {
//     const date = new Date();
//     let hours = date.getHours();
//     console.log(hours)
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds()
//     hours = hours > 12 ? hours - 12 : hours;
//     minutes = minutes < 10 ? "0" +minutes  : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     return `${hours}: ${ minutes}: ${seconds}`
// })