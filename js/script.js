/* STICKY NAVBAR */

// execute stickyNav function on scroll
window.onscroll = function () {
    stickyNav();
}

// get the navbar element
var headerContent = document.getElementsByClassName("header-content");
var header = document.getElementById("navbar");

// get the offset position of the navbar
var menuOffsetPosition = header.offsetTop;

// add .sticky on scroll and remove .sticky when the page is at the top
function stickyNav() {
    if (window.pageYOffset > menuOffsetPosition) {
        header.classList.add("sticky-menu-active");
        headerContent[0].classList.add("sticky-menu-margin-top");
    } else {
        header.classList.remove("sticky-menu-active");
        headerContent[0].classList.remove("sticky-menu-margin-top");
    }
}

/*HAMBURGER-MENU*/

// getting the navbar and hamburger-icon elements
var hamburgerIcon = document.getElementById("hamburger-menu-icon");
var navbarList = document.getElementById("navbar-list");

// onClick listener to toggle the menu up and down
hamburgerIcon.addEventListener('click', navbarListSlide, false);

// function to toggle the menu up and down
function navbarListSlide() {
    navbarList.classList.toggle("navbar-list-hamburger");
    hamburgerIcon.classList.toggle("change");
    if (window.pageYOffset === menuOffsetPosition) {
        header.classList.toggle("sticky-menu-active");
        headerContent[0].classList.toggle("sticky-menu-margin-top");
    }
}




