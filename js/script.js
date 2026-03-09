
// login btn

const logIn = () => {

    const userName = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;

    if (userName === "admin") {
        if (password === "admin123") {
            window.location.href = "../main.html"
        }
        else {
            alert("Your Password is Wrong!!");

        }
    }
    else {
        alert('Enter the valid Name');

    }
}




/* all cards */
