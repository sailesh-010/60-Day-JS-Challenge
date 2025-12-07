//get attribute
let div = document.querySelector('.haha');

let divClass = div.getAttribute('class');
console.log(divClass);

//set attribute
let id = div.setAttribute("id", "my-div");
let idValue = div.getAttribute("id");
console.log(idValue);

//delete attribute
let deleteAttr = div.removeAttribute("id");
let deleteIdValue = div.getAttribute("id");
console.log(deleteIdValue);