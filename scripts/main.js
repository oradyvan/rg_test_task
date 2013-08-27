function addClass(element, classToAdd) {
    var currentClassValue = element.className;
      
    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
      
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
      
    // removing a class value when there is more than one class value present
    // and the class you want to remove is not the first one
    if (currentClassValue.indexOf(" " + classToRemove) != -1) {
        element.className = element.className.replace(" " + classToRemove, "");
        return;
    }
      
    // removing the first class value when there is more than one class
    // value present
    if (currentClassValue.indexOf(classToRemove + " ") != -1) {
        element.className = element.className.replace(classToRemove + " ", "");
        return;
    }
      
    // removing the first class value when there is only one class value 
    // present
    if (currentClassValue.indexOf(classToRemove) != -1) {
        element.className = element.className.replace(classToRemove, "");
        return;
    }
}

function onAddTask() {
// 	window.alert("Task added!");
}

function onAddTaskButtonDown() {
	var theButton = document.querySelector("#add_task");
	addClass(theButton, "button_pressed");
}

function onAddTaskButtonUp() {
	var theButton = document.querySelector("#add_task");
	removeClass(theButton, "button_pressed");
}

function onProjectHeaderMouseOver() {
	var editButton = document.querySelector("#edit_button");
	removeClass(editButton, "invisible");

	var deleteButton = document.querySelector("#delete_button");
	removeClass(deleteButton, "invisible");
}

function onProjectHeaderMouseOut() {
	var editButton = document.querySelector("#edit_button");
	addClass(editButton, "invisible");

	var deleteButton = document.querySelector("#delete_button");
	addClass(deleteButton, "invisible");
}
