document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Send a login request 
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.location.replace("/dashboard");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  });
  