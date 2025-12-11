//createElements and set attributes for html within js

const div = document.createElement("div");
const span = document.createElement("span");

div.setAttribute("class", "container");
span.setAttribute("class", "text-span");

div.textContent = "This is a container div";
span.innerText = "This is a span";

document.body.appendChild(div);

document.body.appendChild(span);

//style elements
div.style.border = "2px solid black";
div.style.padding = "10px";
div.style.margin = "10px";

document.body.prepend(div);

//remove elements
div.remove();
span.remove();