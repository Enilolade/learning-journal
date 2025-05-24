document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("loggedInUsername");

  if (!username) {
    // Optional: redirect to login page if no user is stored
    window.location.href = "../login/login.html";
    return;
  }

  // Example: display username in a welcome message
  const welcomeBanner = document.querySelector("#welcome-message");
  if (welcomeBanner) {
    welcomeBanner.textContent = `Welcome, ${username}!`;
  }

  const postsContainer = document.querySelector(".posts");
  const storedPost = localStorage.getItem("newPost");

  if (storedPost) {
    const { title, content, username, jobTitle, avatar } =
      JSON.parse(storedPost);

    const article = document.createElement("article");
    article.innerHTML = `
    <div class="user-info">
      <img src="${avatar}" alt="Profile Picture of post owner" class="avatar" />
      <div class="username-job">
        <h2 class="writer-name">${username}</h2>
        <p class="job-title">${jobTitle}</p>
      </div>
    </div>
    <details>
      <summary>
        <h3 class="post-title">${title}</h3>
      </summary>
      <p>${content}</p>
    </details>
    <div class="post-actions">
      <button class="like-btn">
        <i class="fa-solid fa-thumbs-up"></i>
        <span>Like</span>
        <span class="like-count">0</span>
      </button>
      <button class="comment-btn">
        <i class="fa-solid fa-comment"></i>
        <span>Comment</span>
      </button>
      <div class="comment-section" hidden>
        <textarea class="comment-input" placeholder="Write a comment..."></textarea>
        <button class="submit-comment">Post</button>
        <ul class="comment-list"></ul>
      </div>
    </div>
  `;

    postsContainer.prepend(article); // Adds it to the top
    localStorage.removeItem("newPost"); // Prevent repeat on refresh
  }

  const writeInput = document.querySelector("#write-post");
  const likeBtns = document.querySelectorAll(".like-btn");
  const commentBtns = document.querySelectorAll(".comment-btn");
  const submitCommentBtns = document.querySelectorAll(".submit-comment");

  writeInput.addEventListener("click", () => {
    window.location.href = "../new-post/new-post.html";
  });

  likeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("liked")) return;
      const countSpan = button.querySelector(".like-count");
      let count = parseInt(countSpan.textContent, 10);
      countSpan.textContent = count + 1;
      button.classList.add("liked");
    });
  });

  commentBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.nextElementSibling;
      section.hidden = !section.hidden;
    });
  });

  submitCommentBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const commentSection = button.closest(".comment-section");
      const input = commentSection.querySelector(".comment-input");
      const list = commentSection.querySelector(".comment-list");

      const commentText = input.value.trim();

      if (commentText !== "") {
        const newComment = document.createElement("li");

        const textSpan = document.createElement("span");
        textSpan.textContent = commentText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-comment");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-comment");

        deleteBtn.addEventListener("click", () => {
          newComment.remove();
        });

        editBtn.addEventListener("click", () => {
          if (editBtn.textContent === "Edit") {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = textSpan.textContent;

            newComment.insertBefore(editInput, textSpan);
            newComment.removeChild(textSpan);

            editBtn.textContent = "Save";
          } else {
            const editInput = newComment.querySelector("input");
            textSpan.textContent = editInput.value;

            newComment.insertBefore(textSpan, editInput);
            newComment.removeChild(editInput);

            editBtn.textContent = "Edit";
          }
        });

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.classList.add("buttons-wrapper");
        buttonsWrapper.appendChild(editBtn);
        buttonsWrapper.appendChild(deleteBtn);

        newComment.appendChild(textSpan);
        newComment.appendChild(buttonsWrapper);

        list.insertBefore(newComment, list.firstChild);
        input.value = "";
      }
    });
  });
});
