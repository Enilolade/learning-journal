document.addEventListener("DOMContentLoaded", () => {
  const postTitle = document.querySelector("#title");
  const postContent = document.querySelector("#content");
  const postSubmitBtn = document.querySelector("#post-submit-btn");

  postSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = postTitle.value.trim();
    const content = postContent.value.trim();
    const username = localStorage.getItem("loggedInUsername") || "Anonymous";

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      username,
      jobTitle: "Frontend Developer",
      avatar: "../images/no-image-avatar.png",
      createdAt: new Date().toISOString(),
    };

    const existingPosts = JSON.parse(localStorage.getItem("allPosts")) || [];
    existingPosts.push(newPost);
    localStorage.setItem("allPosts", JSON.stringify(existingPosts));

    window.location.href = "../logged-in/logged-in.html";
  });
});
