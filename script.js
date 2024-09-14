// Script to handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting
  
  // Get the entered username and password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (you can customize this to check against a database or API)
  if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    window.location.href = 'welcome.html'; // Redirect to a different page on success
  } else {
    // Show an error message
    const errorMsg = document.getElementById('error-msg');
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Incorrect username or password. Please try again.';
  }
});
