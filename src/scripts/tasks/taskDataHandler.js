// This will be a variable for my URL API call
// const taskAPI = "";


// This is where I will declare a constant and export my function that I will build for my API call

const randomTask = {



    //post This will be my post for creating a new object in my database by clicking the button this function shoudl run and then it should post on the dom after. This function is the actual post method.

    storeNewTask(newTaskObject) {
        return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTaskObject)
            })
            .then(tasks => tasks.json())
    },

    // This will be my fetch call initially for my get function and will parse the response into JSON
    getAllTasks() {
        return fetch("http://localhost:8088/tasks")
            .then(response => response.json())
    },

    deleteTaskEntries(taco) {
        return fetch(`http://localhost:8088/tasks/${taco}`, {
                method: "DELETE",
            })
            .then(response => response.json())
    },

    getSingleTask() {
        return fetch("http://localhost:8088/tasks")
    }

    // putEditedTask() {
    //     fetch(`http://localhost:8088/tasks/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(updatedObject)
    //  })
    //   .then(resposne => resposne.json())
    //   .then(() => {
    //       document.querySelector("#taskId").value = ""
    //   })
    // }
}


export default randomTask;