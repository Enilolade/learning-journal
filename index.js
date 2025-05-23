document.addEventListener("DOMContentLoaded", () => {
  const writeInput = document.querySelector("#write-post");
  const signInButton = document.querySelector("#sign-in-btn");
  const likeBtns = document.querySelectorAll(".like-btn");
  const commentBtns = document.querySelectorAll(".comment-btn");
  const submitCommentBtns = document.querySelectorAll(".submit-comment");

  // Helper function to check if user is signed in
  const isSignedIn = () => signInButton.style.display === "none";

  writeInput.addEventListener("click", () => {
    if (!isSignedIn()) {
      window.location.href = "./log-in/login.html";
    }
  });

  likeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (!isSignedIn()) {
        window.location.href = "./log-in/login.html";
        return;
      }
    });
  });

  commentBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (!isSignedIn()) {
        window.location.href = "./log-in/login.html";
        return;
      }
    });
  });

  submitCommentBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (!isSignedIn()) {
        window.location.href = "./log-in/login.html";
        return;
      }
    });
  });
});
