
const checkBox = document.getElementById("input") // è l'input

checkBox.addEventListener("click", () => {
        if(checkBox.checked === true){ // se l'input è cliccato 
            //label2.classList.add("checked") // creo una classe per la label creato
            const label1 = document.getElementById("lbl") // questo è la label non cliccato
            //label1.classList.remove("labelForInput") // elimino la classe precedente della label
            //const label2 = document.createElement("label")
            label1.classList.add("checked") // creo una nuova classe alla label 
            label1.append(checkBox) // appendo l'input nella label
            /*const div = document.querySelector(".Input") // questo è il div contenitore delle label
            div.insertBefore(label1,div.firstChild) // inserisco come primogenito label 2*/
    } else {
         const label2 = document.querySelector("#lbl")
         label2.classList.remove("checked")
         label2.classList.add("labelForInput")
         label2.append(checkBox)
    }
}
)
/*
checkBox.addEventListener("click",() => {
    const checkBoxChecked = document.querySelector(".checked")
    checkBoxChecked.classList.remove("checked")
    checkBoxChecked.classList.add("containerInput")
    checkBoxChecked.appendChild(checkBox)
})*/





const button = document.getElementById("btn")

button.addEventListener("click", () => {
    if (checkBox.checked === true) {
        const url = "./question.html"
        window.location.href = url
    } else {
        alert("Check the box")
    }
}
)
