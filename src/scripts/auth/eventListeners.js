import auth from "./auth.js"
// Purpose: The purpose of this file is to handle user authentication for login and logout of application. Author: Sam Pita

const authEventListeners = {
    userLogout() {
        sessionStorage.removeItem("activeUser")
    },

    // function to add event listener to Logout Button
    // when executed, the function clears the userID cached in sessionStorage
    logoutButtonHandler() {
        const logoutButton = document.querySelector("#logoutButton")
        logoutButton.addEventListener("click", () => {
            authEventListeners.userLogout()
            auth.startUpApplication()
        }
    )
    }
}

export default authEventListeners