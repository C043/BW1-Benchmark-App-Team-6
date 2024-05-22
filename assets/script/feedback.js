const starInputs = document.querySelectorAll("input:not(#comment)");
const showValue = document.querySelector("#rating-value");
const moreInfoButton = document.getElementById("moreInfo");
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
