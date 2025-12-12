let btn = document.getElementById("change");
let div = document.querySelector(".hello");

btn.addEventListener("click", () => {
    div.textContent = "welcome to js 60 days challenge!";
})

btn.addEventListener("dblclick", () => {
    div.textContent = "hello world!";
})