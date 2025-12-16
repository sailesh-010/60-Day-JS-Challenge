let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener(
  "click",
  function (e) {
    console.log("Parent Clicked - Capturing Phase");
  },
  true
);

child.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Child Clicked - Bubbling Phase");
});



parent.addEventListener(
  "click",
  function () {
    console.log("Parent Clicked - Bubbling Phase");
  }
);