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
// console.log(clock())
const result = clock()
console.log(result)
// setInterval(() => {
//     console.log(clock())
// }, 1000);
// clearInterval(clock())


