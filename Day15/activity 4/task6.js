// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createCollectionManager() {
    let items = []; 

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: function() {
            console.log("Items in collection:", items);
        }
    };
}

const myCollection = createCollectionManager();

myCollection.addItem("Book");      
myCollection.addItem("Pen");       
myCollection.listItems();
myCollection.removeItem("Pen");    
myCollection.listItems();
