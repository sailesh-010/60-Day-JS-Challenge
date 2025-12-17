let touch = document.querySelectorAll("div, p, span");
console.log(touch); 
touch.forEach((element) => {
  
  element.addEventListener("click", (e) => {
    
    e.stopPropagation();

    console.log(`You clicked a <${element.tagName.toLowerCase()}> element!`);

    element.style.border = "2px solid red";
  });
});
