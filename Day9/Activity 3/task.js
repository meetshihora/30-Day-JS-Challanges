// Task 5: Select an HTML element and remove it from the DOM.

var heading = document.getElementById("heading");
heading.remove();
        
// Task 6: Remove the last child of a specific HTML element.

var subheading = document.getElementsByClassName("subheading");
subheading[0].lastElementChild.remove();