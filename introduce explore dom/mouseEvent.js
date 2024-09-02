// mouse events-
const li = document.getElementById('name');
li.addEventListener('change', (event) => {
    event.currentTarget.value=event.currentTarget.value.toLowerCase()
})

// mouse move-
const mouseMove = document.querySelector("h1")
mouseMove.addEventListener("mousemove", (event) => {
    event.currentTarget.style.color="pink"
})

const mouseOut = document.querySelector("h1")
mouseMove.addEventListener("mouseout", (event) => {
    event.currentTarget.style.color="black"
})