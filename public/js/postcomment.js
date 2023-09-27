
document.getElementById("comment-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const text = document.getElementById("comment-text").value.trim();
  
    //create a new comment
    fetch(`/api/comments/${blogId}`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  });  