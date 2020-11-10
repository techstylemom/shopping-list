var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var lis = document.getElementsByTagName("li");
var buttons = document.getElementsByClassName("delete");


// remove an item from the list
removeItemFromList();

function removeItemFromList() {
  for(var x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", removeParent);
  }
}

function removeParent(event) {
  event.target.parentNode.remove();
}

// adding strikethrough to an item on the list
markDoneList();

function markDoneList() {
  for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", toggleList);
  }
}

function toggleList(event) {
  event.target.classList.toggle("done");
}

function inputLength() {
  return input.value.length;
}

// adding new item on the list and a delete button
// adding all functions to the new item on the list (markDoneList & removeItemFromList)
function addList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var deleteButton = document.createElement("button");
  var space = document.createTextNode("  ");
  deleteButton.classList.add("delete");
  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(space);
  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";
  markDoneList();
  removeItemFromList();
}

function addListAfterClick() {

    if (inputLength() > 0 ) {
      addList();
    }

}

function addListAfterKeypress(event) {

  if (inputLength() > 0 && event.which === 13) {
    addList();
  }
}

//call back function, setting a reference to this function
//without running it
button.addEventListener("click", addListAfterClick);

//call back function, setting a reference to this function
//without running it
input.addEventListener("keypress", addListAfterKeypress);
