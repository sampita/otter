
export default updateInputFields = taskId => {
    const hiddenTaskId = document.querySelector("#taskId")
    const editTaskNameInput = document.querySelector("#taskNameInput")
    const editDateInput = document.querySelector("#taskDateInput")

    fetch(`http://localhost:8088/tasks/${taskId}`)
        .then(response => response.json())
        .then(tasks => {
         
            hiddenTaskId.value = tasks.id
            editTaskNameInput.value = tasks.name
            editDateInput.value = tasks.date
        })
    


    }
