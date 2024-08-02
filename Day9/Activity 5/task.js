// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

var button = document.getElementById("button");
button.addEventListener("click", function() {
    var paragraph = document.getElementById("paragraph");
    paragraph.innerHTML = "Complete Task 9";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.

var subheading = document.getElementsByClassName("subheading");
subheading[0].addEventListener("mouseover", function() {
    subheading[0].style.borderColor = "black";
})
subheading[0].addEventListener("mouseout", function() {
    subheading[0].style.borderColor = "red";
})