// First draft no reference JS code, paired with HTML and CSS

// Adding functionality for button to create menu popup, on click
// const expander = document.querySelector("/.expander")
// expander.addEventListener("click", display = "")

// Click event to open the menu
const icon = document.querySelector(".icon");
icon.addEventListener("click", function expand() {
    document.getElementById("sidemenu").style.width = "250px";
});

// Create event to close menu with "X"
const x = document.querySelector(".closer");
x.addEventListener("click", function contract() {
    document.getElementById("sidemenu").style.width = "0";
});