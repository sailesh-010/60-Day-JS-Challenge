let btn = document.getElementById("chnage");
let box = document.getElementById("myBox");
btn.addEventListener("click", makeItCool);

function makeItCool() {
    if (box.style.backgroundColor === "red") {
    
    box.style.backgroundColor = "";
    box.style.fontSize = "";
    box.innerText = "Original Box";
    } else {

    box.style.backgroundColor = "red";
    box.style.fontSize = "25px";
    box.innerText = "I am now styled!";
    }
}
