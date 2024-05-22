
const checkBox = document.getElementById("input") // è l'input

checkBox.addEventListener("click", () => {
    if (checkBox.checked === true) { // vedo se l'input è cliccato 
        const label1 = document.getElementById("lbl") // questa è la label non cliccato
        label1.classList.add("checked") // creo una nuova classe alla label 
        label1.append(checkBox) // appendo l'input nella label come "fratello"
    } else {
        const label2 = document.querySelector("#lbl") // tag input
        label2.classList.remove("checked") // rimuovo la classe quando è cliccato
        label2.classList.add("labelForInput") // rimetto la classe iniziale(vuoto)
        label2.append(checkBox) // appendo l'input nella label come "fratello"
    }
}
)
const button = document.getElementById("btn") // è il bottone
// se il checkbox è checked va nella prossima pagina(question) / in caso contrario mi dice di fare il check sull'input
button.addEventListener("click", () => {
    if (checkBox.checked === true) {
        const url = "./question.html"
        window.location.href = url
    } else {
        alert("Check the box")
    }
}
)
