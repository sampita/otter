import taskRender from "./tasksForm.js";
import randomTask from "./taskDataHandler.js";

let taskEvents = {
    createTaskButtonHandler () {
        const createTaskButton = document.querySelector("#saveTask")
        createTaskButton.addEventListener("click", () => {
            // const newTaskObject = document.querySelector("#taskInputField").value;
            // console.log(newTaskObject)
            taskRender.getTaskAndSendToDisplay()
            // console.log("click")
        })
    },

    taskDeleteListener () {
        const deleteTaskButton = document.querySelector("#taskDisplay")
        deleteTaskButton.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteTask--")) {
                const taskToDelete = event.target.id.split("--")[1]
                randomTask.deleteTaskEntries(taskToDelete)
                .then(randomTask.getAllTasks)
                .then(taskRender.displayTasksFunction);
            }
        })
    },
// This needs to be refactored to fit the example on the
    editTaskListener () {
        const editTaskButon = document.querySelector("#taskDisplay")
        editTaskButon.addEventListener("click", event => {
            if (event.target.id.startsWith("editTask--")) {
                const taskToEdit = event.target.id.split("--")[1]
                // console.log(taskToEdit)
                updateEditFields(taskToEdit)
            }
        })
    },
    // saveButtonListener () {
    //     const saveButtonId = document.querySelector("#saveTask")
    //     saveButtonListener.addeventListener("click", event => {
    //             console.log("click")
    //         if ( saveButtonId.value !== "") {
    //             editTask(taskId)
    //         } else {
    //            const editTask = id => {
    //                const updatedTask = {
    //                    taskName: document.querySelector("#taskId").value,
    //                    taskDate: document.querySelector("#taskDate").value
    //                }
    //                randomTask.putEditedTask()
    //            } // WTF IS SAVE FUNCTIONALITY?!!!
    //         }
    //     })
    // }
}
export default taskEvents;