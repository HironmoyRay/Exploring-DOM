const clickMe = document.getElementById("click-me");
clickMe.onclick = function () {
  console.log("Hello From Js");
};

const makeRed = document.getElementById("bg-red");
makeRed.onclick = function () {
  document.body.style.backgroundColor = "red";
};

document.getElementById("bg-purple").addEventListener('click',function(){
    document.body.style.backgroundColor = 'purple';
})
