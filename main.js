var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var deleteButton = document.getElementsByClassName("delete");
var filter = document.getElementById("filter")

// FORM SUBMIT EVENT
form.addEventListener("submit", addItem);

// DELETE ITEM EVENT
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", removeItem);
}
// FILTER EVENT
filter.addEventListener("keyup", filterItems)

// ADD ITEM
function addItem(e) {
    e.preventDefault();

    // GET INPUT VALUE
    var newItem = document.getElementById("item").value;

    // CREATE NEW LI ELEMENT
    var li = document.createElement("li");
    // ADD CLASS
    li.className = "list-group-item"

    // ADD TEXT NODE WITH INPUT VALUE
    li.appendChild(document.createTextNode(newItem));

    // APPEND BUTTON TO ITEMLIST
    itemList.appendChild(li);

    // CREATE DELETE BUTTON ELEMENT
    var deleteBtn = document.createElement("button");

    // ADD CLASSES TO DELETE BUTTON
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // APPEND TEXT NODE 
    deleteBtn.appendChild(document.createTextNode("X"));

    // APPEND BUTTON TO LI
    li.appendChild(deleteBtn);

    // ADD EVENT LISTENER TO THE DELETE BUTTON
    deleteBtn.addEventListener("click", removeItem);
}

// DELETE ITEM
function removeItem(e) {
    e.preventDefault();
    // console.log("Delete button clicked");
    if (confirm("Are you sure?")) {
        var li = e.target.parentElement;
        itemList.removeChild(li)
    }
}

// FILTER ITEM
function filterItems(e) {
    // convert text  to lowercase
    var text = e.target.value.toLowerCase();
    // GET LIST
    var lists = itemList.getElementsByTagName("li");
    // console.log(lists)
    // CONVERT TO AN ARRAY
    Array.from(lists).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}