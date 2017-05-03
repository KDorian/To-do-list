var taskList = [];

// function addItem

function addItem() {
  var task = document.getElementById("todoInput").value;
  var ul = document.getElementById("myUl");

  // prevents user form adding blank to do element
  if(task.trim().length === 0) {
    return false;
  } // end of if
  else {
    if(taskList.length < 5){
      taskList.push(task);

      var li = document.createElement("li");
      var text = document.createTextNode(task);
      li.appendChild(text);

      var checkMark = document.createElement("button");
      checkMark.innerHTML = "&check;";
      checkMark.className = "listItemButton";
      checkMark.setAttribute("onclick", "checkMe(this)");
      li.appendChild(checkMark);

      var crossMark = document.createElement("button");
      crossMark.innerHTML = "&#x2715;";
      crossMark.className = "listItemButton";
      crossMark.setAttribute("onclick", "removeMe(this)");
      li.appendChild(crossMark);

      ul.appendChild(li);
      reset();
    } // end of if
  } // end of else
} // end of function

// function reset

function reset() {
  document.getElementById("todoInput").value = "";
} // end of function

// function checkMe(item)

function checkMe(item) {
  var liTag = item.parentElement;
  liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through";
} // end of function

// function removeMe(item)

function removeMe(item) {
  var liTag = item.parentElement;
  var ulTag = liTag.parentElement;
  ulTag.removeChild(liTag);
  taskList.pop();
} // end of function

// function enterKey

function enterKey() {
  var input = document.getElementById("todoInput");
  input.onkeyup = function(key) {
    if(key.keyCode === 13) {
      addItem();
    } // end of if
  } // end of onkeyup
} //end of function

enterKey();

// function clearList

function clearList() {
  var ul = document.getElementById("myUl");
  ul.innerHTML = "";
  taskList.splice(0, taskList.length);
} // end of function
