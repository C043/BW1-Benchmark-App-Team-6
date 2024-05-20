let star = document.querySelectorAll("input:not(#comment)");
let showValue = document.querySelector("#rating-value");

//ciclo for per la selezione delle stelle e la stampa di numeri di valutazione
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    i = this.value;
    showValue.innerText = i + "/10";
    console.log(showValue);
  });
}
const form = document.getElementById("commentFeedback");

const sendComment = document.getElementById("sendFeedback");
sendComment.addEventListener("click", () => {
  form.reset();
  showValue.innerText = "";
  const url = "./index.html";
  window.location.href = url;
});
