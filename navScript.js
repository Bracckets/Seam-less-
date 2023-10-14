$(document).ready(function () {
    var menuToggle = $("#nav-hamburger")
    var menu = $("#navigation")

    menuToggle.click(function () {
        menu.toggleClass("active")
    });  
});