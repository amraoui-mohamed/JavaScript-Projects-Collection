let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".seconds")


setInterval(() => {
    let currentTime = new Date()

    hour.innerText = (currentTime.getHours()<"10"?"0":"") + currentTime.getHours()
    min.innerText = (currentTime.getMinutes()<"10"?"0":"") + currentTime.getMinutes()
    sec.innerText = (currentTime.getSeconds()<"10"?"0":"") + currentTime.getSeconds()

}, 1000)

