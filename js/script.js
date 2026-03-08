
// login btn
// alert('hi') 
document.getElementById("login-btn").addEventListener('click', function(e){
    e.defaultPrevented;
    const userName = document.getElementById("user-name").value ;
    // console.log(userName);
    const password = document.getElementById("password").value ;
    // console.log(password);
    
    if(userName === "admin"){
        if(password === "admin123"){
            window.location.href="../main.html"
        }else{
           alert("Your Password is Wrong!!");
            
        }        
    }
    else{
        alert('Enter the valid Name');
        
    }
})