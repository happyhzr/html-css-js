const containerEl = document.querySelector(".container");
const careers = ['hacker', 'web developer', 'designer', 'programmer', 'freelancer'];
let i = 0
let j = 0
updateText()

function updateText() {
    containerEl.innerHTML = `<h1>I am a ${careers[i].slice(0, j)}</h1>`
    j++
    if (j > careers[i].length) {
        j = 0
        i++
    }
    if (i >= careers.length) {
        i = 0
    }
    setTimeout(updateText, 100)
}