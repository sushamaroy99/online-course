document.querySelector(".register-form").addEventListener("submit", function(e) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        e.preventDefault(); 
        alert("Passwords do not match!");
    }
});
