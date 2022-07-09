
let adviceId = document.querySelector(".heading span")
let adviceDiv = document.querySelector(".advice")
let btn = document.querySelector(".generate")
let url = "	https://api.adviceslip.com/advice"



const fetchApi = async () => {
    const response = await fetch(url)
    const advice = await response.json()
    console.log(advice);
    adviceId.innerHTML = `#${advice.slip.id}`
    adviceDiv.innerHTML = `<q>${advice.slip.advice}</q>`
}
btn.addEventListener("click", fetchApi)
window.addEventListener("load",fetchApi)