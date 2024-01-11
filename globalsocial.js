function addUser() {

    userName = document.getElementById("userName").valeu;
    localStorage.setItem("userName", userName);
    window.location = "globalsocial.html";
}