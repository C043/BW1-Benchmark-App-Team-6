/* document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".feedback-stars");
  console.log(container);
  const stars = Array.from(container.children);

  console.log(stars);
  // Invertire l'ordine degli elementi
  stars.reverse().forEach((star) => container.appendChild(star));
 */
const starInputs = document.querySelectorAll("input:not(#comment)");
const showValue = document.querySelector("#rating-value");

starInputs.forEach((star) => {
  star.addEventListener("click", function () {
    const value = this.value;
    showValue.innerText = value + "/10";
    console.log(showValue.innerText);
  });
});

const form = document.getElementById("commentFeedback");
const sendComment = document.getElementById("sendFeedback");
sendComment.addEventListener("click", () => {
  form.reset();
  showValue.innerText = "";
});
/* }); */
