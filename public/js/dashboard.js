document.getElementById("create-post-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();
  
    // create a new post
    fetch("/api/posts", {
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
  
  const deleteButtons = document.querySelectorAll(".delete-post-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const postId = this.getAttribute("data-post-id");
  
      // delete the post
      fetch(`/api/posts/${postId}`, {
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
  