// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

var img = document.getElementsByTagName("img");
img[0].src = "https://www.w3schools.com/js/pic_bulbon.gif";

// Task 8: Add and remove a CSS class to/from an HTML element.

var subheading = document.getElementsByClassName("subheading");
subheading[0].classList.add("newClass");
subheading[0].classList.remove("newClass");