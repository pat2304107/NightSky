const inputElement = document.getElementById("input");
const body = document.querySelector("body");
const discriptionContainerElement = document.querySelector(
  ".discription-container",
);
const retryButton = document.querySelector(".retry");
const sentence = document.querySelector(".sentence");
let inputValue;
let isStarAnimationEnded = false;

inputElement.addEventListener("input", (e) => {
  inputValue = e.target.value;
  // console.log("input:", inputValue);
});

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    discriptionContainerElement.classList.add("transparent");
    createStars(inputValue);
    // console.log("enter:", inputValue);
  }
});

retryButton.addEventListener("click", () => {
  resetScene();
});

const createStars = (count) => {
  console.log(count);
  for (let i = 0; i < count; i++) {
    let starElement = document.createElement("span");

    starElement.className = "star";
    starElement.textContent = "*";
    starElement.style.left = Math.random() * 100 + "%";
    starElement.style.top = Math.random() * 100 + "%";

    setTimeout(() => {
      body.appendChild(starElement);
      if (i == count - 1) {
        isStarAnimationEnded = true;
        console.log(isStarAnimationEnded);
        if (isStarAnimationEnded == true) {
          sentence.classList.add("show");
        }
      }
    }, 100 * i);
  }
};

const resetScene = () => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    console.log(star);
    star.remove();
  });

  sentence.classList.remove("show");
  discriptionContainerElement.classList.remove("transparent");

  inputValue = "";
  inputElement.value = "";
};
