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
        fullContainer.innerHTML = `<p class="feedBack">I appreciate your feedback. I accept responsibility for it and will ensure it does not recur.</p>`;
      } else if (selectedRating >= 3 && selectedRating < 7) {
        fullContainer.innerHTML = `<p class="feedBack">Your feedback helps me to improve my work performance and avoid such mistakes in the future.</p>`;
      } else if (selectedRating >= 7 && selectedRating <= 10) {
        fullContainer.innerHTML = `<p class="feedBack">Thank you for the feedback, I try to give my best every time.</p>`;
      }
    }
  });
});
