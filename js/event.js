const clickMe = document.getElementById("click-me");
clickMe.onclick = function () {
  console.log("Hello From Js");
};

const makeRed = document.getElementById("bg-red");
makeRed.onclick = function () {
  document.body.style.backgroundColor = "red";
};

document.getElementById("bg-purple").addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
});
document.getElementById("bg-white").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const displayInput = document.getElementById("display-input");
  displayInput.innerText = inputText;
  inputField.value = "";
});
