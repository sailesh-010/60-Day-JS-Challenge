let btn = document.querySelector("button");
let div = document.querySelector("div");
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    div.classList.toggle("dark-mode");
});