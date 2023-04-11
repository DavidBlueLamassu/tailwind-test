const number = document.querySelector("#number");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const numberElement = document.createElement("h1");
let n = 0;

numberElement.textContent = n;
number.appendChild(numberElement);
number.setAttribute("class", "character");

add.addEventListener("click", function(event) {
    n++;
    numberElement.textContent = n;
})

subtract.addEventListener("click", function(event) {
    n--;
    numberElement.textContent = n;
})
