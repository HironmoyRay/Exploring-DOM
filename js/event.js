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

// <!-- Update Text -->
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const displayInput = document.getElementById("display-input");
  displayInput.innerText = inputText;
  inputField.value = "";
});

// <!-- Post Comment -->
document.getElementById("btn-post").addEventListener("click", function () {
  // console.log("Clicked By Post Btn");
  const textField = document.getElementById("text-field");
  const newText = textField.value;
  // console.log(text);
  const postContainer = document.getElementById("post-container");
  const p = document.createElement("p");
  p.innerText = newText;
  postContainer.appendChild(p);
  textField.value = "";
});

// Delete Secret
document.getElementById("btn-delete").addEventListener("click", function () {
  const secretText = document.getElementById("secret-text");
  secretText.style.display = "none";
});

document.getElementById("delete-field").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const btnDelete = document.getElementById("btn-delete");
  if (text === "delete") {
    btnDelete.removeAttribute("disabled");
  } else {
    btnDelete.setAttribute("disabled", true);
  }
});
