//Начало

//Подключаем id
let input = document.getElementById("input");
let output = document.getElementById("output");
let output__title = document.getElementById("output__title");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let a = [];

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    a.push(input.value);
    input.value = "";
    output__title.textContent = a;
  }
});

btn1.addEventListener("click", (e) => {
    a.shift()
    output__title.textContent = a
});

btn2.addEventListener("click", (e) => {
    a.pop()
    output__title.textContent = a
});

console.log(a);