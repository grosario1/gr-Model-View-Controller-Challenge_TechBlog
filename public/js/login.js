//Login
async function loginFormHandler(event) {
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
    
      const responseJson = await response.json()
      errorMessage.textContent = responseJson.message
      errorMessage.classList.remove('hidden')
    }
  }
};
  