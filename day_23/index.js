let newdiv = document.createElement("div");
let newdiv1 = document.createElement("div");

newdiv.setAttribute("id", "parent");
newdiv1.setAttribute("id", "child");

newdiv.textContent= "This is a parent div";


newdiv1.innerHTML = "<h1>Hello World</h1>";


newdiv.style.color = "blue";
newdiv1.style.color = "green";


newdiv.appendChild(newdiv1);
document.body.appendChild(newdiv);