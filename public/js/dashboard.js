// Create a new post
document.getElementById("create-blog-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("post-title").value.trim();
  const content = document.getElementById("post-content").value.trim();

  // Create a new blog post
  fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      window.location.replace("/dashboard");
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
});

// Delete a blog post
const deleteButtons = document.querySelectorAll(".delete-post-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const postId = this.getAttribute("data-post-id");

    fetch(`/api/blogs/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  });
});

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
  fetch("/api/logout", {
    method: "POST",
  })
    .then(() => {
      window.location.replace("/");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
});