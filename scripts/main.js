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
	var theButton = document.querySelector(".add_task_button");
	addClass(theButton, "button_pressed");
}

function onAddTaskButtonUp() {
	var theButton = document.querySelector(".add_task_button");
 	removeClass(theButton, "button_pressed");
}

function onProjectHeaderMouseOver() {
	var group = document.querySelector(".project_actions");
	removeClass(group, "hide");
}

function onProjectHeaderMouseOut() {
	var group = document.querySelector(".project_actions");
	addClass(group, "hide");
}

function onTaskMouseOver(taskNumber) {
	// hide task icons
	var taskRow = ".task" + taskNumber;
	var taskSelector = taskRow + " .task_actions";
	var group = document.querySelector(taskSelector);
	removeClass(group, "hide");

	// highlight the task row
	group = document.querySelector(taskRow);
	addClass(group, "highlighted");
}

function onTaskMouseOut(taskNumber) {
	// show task icons
	var taskRow = ".task" + taskNumber;
	var taskSelector = taskRow + " .task_actions";
	var group = document.querySelector(taskSelector);
	addClass(group, "hide");

	// unhighlight the task row
	group = document.querySelector(taskRow);
	removeClass(group, "highlighted");
}
