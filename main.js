// Btn
let btnMentor = document.getElementById("btnMentor");

// Attribute of input type text in the form forEach loop
let inputs = document.querySelectorAll("input[type=text]");

inputs.forEach((element) => {
  element.addEventListener("focus", function (e) {
    e.target.style.backgroundColor = "#f5f5f5";
  });
});
