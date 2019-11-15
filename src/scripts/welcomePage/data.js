import { runInNewContext } from "vm"

// Purpose: This file is responsible for all fetch calls to the API


const data = {
//GET request to get user data and store id to sessionStorage
/* getUserData() {
        
    }, */
    
//POST request to post new user ID to API upon sign up
storeNewUser(newUserObject) {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserObject)
    })
        .then(users => users.json())
    },

// This is a new function inside the data export that is going to be used as our get request or get all for reference specifically on login.

getUserByEmail(email) {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(response => response.json())
    
}
}


export default data;