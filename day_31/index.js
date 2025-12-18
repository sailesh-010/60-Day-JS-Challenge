function login(callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback();
  }, 1000);
}

function checkToken(callback) {
  setTimeout(() => {
    console.log("Token validated");
    callback();
  }, 1000);
}

function accessSecureData(callback) {
  setTimeout(() => {
    console.log("Secure data accessed");
    callback();
  }, 1000);
}

// Callback Hell
login(() => {
  checkToken(() => {
    accessSecureData(() => {
      console.log("All security checks passed");
    });
  });
});
