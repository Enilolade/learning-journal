document.addEventListener("DOMContentLoaded", () => {
  const writeInput = document.querySelector("#write-post");
  const signInButton = document.querySelector("#sign-in-btn");
  const likeBtns = document.querySelectorAll(".like-btn");
  const commentBtns = document.querySelectorAll(".comment-btn");
  const submitCommentBtns = document.querySelectorAll(".submit-comment");

  // Helper function to check if user is signed in
  // const isSignedIn = () => signInButton.style.display === "none";

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

        // Create text span
        const textSpan = document.createElement("span");
        textSpan.textContent = commentText;

        // Create Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-comment");

        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-comment");

        // Handle delete
        deleteBtn.addEventListener("click", () => {
          newComment.remove();
        });

        // Handle edit
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

        newComment.appendChild(textSpan);
        newComment.appendChild(editBtn);
        newComment.appendChild(deleteBtn);
        list.appendChild(newComment);

        input.value = "";
      }
    });
  });
});
