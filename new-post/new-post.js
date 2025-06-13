const postTitle = document.querySelector("#title");
const postContent = document.querySelector("#content");
const postSubmitBtn = document.querySelector("#post-submit-btn");
const datePosted = document.querySelector("#date");

postSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = postTitle.value.trim();
  const content = postContent.value.trim();
  const username = localStorage.getItem("loggedInUsername") || "Anonymous";
  const createdAt = new Date();

  console.log(title);

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
    createdAt,
  };

  console.log(createdAt);

  console.log("New Post Created:", newPost);

  const existingPosts = JSON.parse(localStorage.getItem("allPosts")) || [];
  existingPosts.push(newPost);
  localStorage.setItem("allPosts", JSON.stringify(existingPosts));

  console.log("All Posts after adding new post:", existingPosts);

  window.location.href = "../logged-in/logged-in.html";
});
