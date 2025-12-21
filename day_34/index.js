fetch("https://api.github.com/users/octocat")
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then(user => {
    console.log("Username:", user.login);
    console.log("Public Repos:", user.public_repos);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
  <h2>GitHub User Info</h2>
  <p><strong>Username:</strong> octocat</p>
  <p><strong>Public Repos:</strong> 8</p>
`;