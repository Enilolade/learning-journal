document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const logInButton = document.querySelector("#log-in-btn");

  logInButton.addEventListener("click", (event) => {
    event.preventDefault();
    const password = passwordInput.value;
    const username = usernameInput.value;

    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    if (password === "ILoveProgramming") {
      // Store the username before redirecting
      localStorage.setItem("loggedInUsername", username);

      window.location.href = "../logged-in/logged-in.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  });
});
