// Task 3: Create a new div element with some text content and append it to the body.

var div = document.createElement("div");
div.innerHTML = "This is a new div element";
document.body.appendChild(div);

// Task 4, Create a new li element and add it to an existing ul list.

var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerHTML = "This is a new li element";
ul.appendChild(li);
document.body.appendChild(ul);