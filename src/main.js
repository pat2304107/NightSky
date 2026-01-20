const inputElement = document.getElementById("input");
let inputValue;

inputElement.addEventListener("input", (e) => {
  inputValue = e.target.value;
  console.log("input:", inputValue);
});

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("enter:", inputValue);
  }
});
