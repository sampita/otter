import randomTaskData from "./taskDataHandler.js";
import taskEvents from "./taskEventListeners.js";

// import mainPage from "./welcomePage/userMainPage.js";

const taskRender = {
buildAndAppendTaskContainer: () => {
    const taskContainerHtml = `
    <form>
      <input type="hidden" id="taskId" value="" />
      <fieldset clas="fieldset">
      <div id="toDoListContainer" class="taskForm-popup">
        <h3 class="componentTitle">To-Do List</h3>
        
        <label for="taskName"><b>Task Name</b></label>
        <input type="text" placeholder="Enter Task Name"
        name="taskName" id="taskNameInput" required>

        <label for="taskExpectedDate"><b>Due Date</b></label>
        <input type="date" placeholder="Enter Due Date"
        name="taskDate" id="taskDateInput" required>
        
        
        <button id="saveTask" class="addBtn"
        >Save Task</button>
        </div>
        <section id="taskDisplay"></section>
      </fieldset>
    </form>
    `

const taskPageContainer = document.querySelector("#toDo-container")
taskPageContainer.innerHTML = taskContainerHtml;

},

// This allows me to grab the data from inputs and save it
getTaskAndSendToDisplay() {
  // const taskName = document.querySelector("taskNameInput").value
  // randomTaskData.getTaskAndSendToDisplay(taskName)
  const name = document.querySelector("#taskNameInput").value
  const date = document.querySelector("#taskDateInput").value
  const userId = sessionStorage.getItem("activeUser")
  const completed = false

  return randomTaskData.storeNewTask({name, date, userId, completed})
},

displayTasksFunction: (taskEntries) => {
  let displayTasks = "";
  // This for Each loop allows the computer to understand that my builder needs to go through Each object on the array instead of tring to get all of them and then seperate them. SO if you delete this it will return only undefined.
  taskEntries.forEach(task => {
    // I had to refactor this and declare this function as a variable so I could call it properly down the line.
    displayTasks +=`<article class="task--${task.id}">
    <header id="taskCardHeader">
    <input type="checkbox">
    <h2 id="taskCardName">${task.name}</h2>
    <i class="fas fa-pen" id="editTask--${task.id}"></i>
    <i class="fas fa-trash-alt" id="deleteTask--${task.id}"></i>
    </header>
    <p>${task.date}</p>
    <p>${task.completed}</p>
    </article>
    `
    
    // THis is where I called and run this function if you take out the variable then you can't utilize it any further. So the previous const is necessary for this down here to work.
    
  });// debugger
  
  const displayTaskContainer = document.querySelector("#taskDisplay")
  displayTaskContainer.innerHTML = displayTasks;
}

}


// mainPage.buildAndAppendTaskContainer()
export default taskRender;