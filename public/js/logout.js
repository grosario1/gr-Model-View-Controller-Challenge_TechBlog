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
  