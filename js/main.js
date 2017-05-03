var taskList = [];

// function addItem

function addItem() {
  var task = document.getElementById("todoInput").value;
  var ul = document.getElementById("myUl");
  //alert(task);

  // prevents user form adding blank to do element
  if(task.trim().length === 0) {
    return false;
  } // end of if
  else {
    if(taskList.length < 5){
      taskList.push(task);
      //alert(taskList);

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
  //alert(item);
  var liTag = item.parentElement;
  // alert(liTag);
  liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through";


} // end of function
