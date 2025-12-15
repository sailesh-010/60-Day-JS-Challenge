const userList = document.getElementById("user-list");

userList.addEventListener("click", function (e) {
  const clickedElement = e.target;

  console.log("Clicked Element:", clickedElement);

  if (clickedElement.tagName === "SPAN") {
    const userId = clickedElement.getAttribute("data-user-id");
    console.log(`User ID to view profile: ${userId}`);

  }
});
