document.addEventListener("DOMContentLoaded", function () {
  const starInputs = document.querySelectorAll("input:not(#comment)");
  const showValue = document.querySelector("#rating-value");
  const sendComment = document.getElementById("sendFeedback");
  const form = document.getElementById("commentFeedback");
  const fullContainer = document.querySelector(".fullContainer");

  let selectedRating = null;

  starInputs.forEach((star) => {
    star.addEventListener("click", function () {
      selectedRating = this.value;
      showValue.innerText = selectedRating + "/10";
      console.log(showValue.innerText);
    });
  });

  sendComment.addEventListener("click", (event) => {
    event.preventDefault();

    if (selectedRating !== null) {
      form.reset();
      showValue.innerText = "";

      if (selectedRating < 3) {
        fullContainer.innerHTML = `<p class="feedBack">We're sorry</p>`;
      } else if (selectedRating >= 3 && selectedRating < 7) {
        fullContainer.innerHTML = `<p class="feedBack">Speriamo vada meglio la prossima volta</p>`;
      } else if (selectedRating >= 7 && selectedRating <= 10) {
        fullContainer.innerHTML = `<p class="feedBack">Grazie per il feedback</p>`;
      }
    }
  });
});
