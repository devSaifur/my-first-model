const btnEl = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")
const model = document.getElementById("model-text")
const modelContiner = document.querySelector(".model-container")

function changeStyle(btn, styleValue) {
    btn.addEventListener("click", () => {
        modelContiner.style.display = styleValue
    })
}
changeStyle(btnEl, "block")
changeStyle(closeBtn, "none")

window.addEventListener("click", (eliment) => {
    if (eliment.target == modelContiner) {
        modelContiner.style.display = "none"
    }
})