let button = document.querySelector(".button");
let header = document.querySelector(".header");

button.addEventListener("click", () =>{
    header.classList.toggle("color");
    if (header.classList.contains("color")) {
        button.innerText = "WŁĄCZ POPRZEDNIE TŁO NAGŁÓWKA"
    } else
        button.innerText = "WŁĄCZ NOWE TŁO NAGŁÓWKA"
})