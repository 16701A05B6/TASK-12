const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "vyshu" && password === "vyshu123") {
        alert("You have successfully logged in.");
        location.replace("user_operations.HTML");
    } else
        alert("Invalid username or password");
   
})
