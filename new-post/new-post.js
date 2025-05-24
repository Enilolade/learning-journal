document.addEventListener("DOMContentLoaded", () => {
  const postTitle = document.querySelector("#title");
  const postContent = document.querySelector("#content");
  const postSubmitBtn = document.querySelector("#post-submit-btn");

  postSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission

    const title = postTitle.value.trim();
    const content = postContent.value.trim();
    const username = localStorage.getItem("loggedInUsername") || "Anonymous";

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      title,
      content,
      username,
      jobTitle: "Frontend Developer",
      avatar: "../images/no-image-avatar.png",
    };

    localStorage.setItem("newPost", JSON.stringify(newPost));
    window.location.href = "../logged-in/logged-in.html";
  });
});
