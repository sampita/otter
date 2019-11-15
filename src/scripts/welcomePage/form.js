import data from "./data.js"
import mainPage from "./userMainPage.js"


const forms = {
    buildAndAppendSignUpForm: () => {
        const signUpForm = `
        <div class="signUpForm-popup">
            <form class="form-container">
                <h1>Sign Up</h1>

                <input type="hidden" id="idInput">

                <label for="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" id="firstNameInput" required>

                <label for="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" id="lastNameInput" required>
            
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="emailInput" required>
        
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="passwordInput" required>

                <label for="psw"><b>Confirm Password</b></label>
                <input type="confirmPassword" placeholder="Confirm Password" name="psw" id="confirmPasswordInput" required>
        
                <button type="submit" class="btn" id="createAccountButton">Create Account</button>
            </form>
        </div> 
            `

        const signUpFormContainerDiv = document.querySelector("#popup-container")
        signUpFormContainerDiv.innerHTML = signUpForm
    },

    buildAndAppendLogInForm: () => {
        const logInForm = `
        <div class="logInForm-popup">
            <form class="form-container">
                <h1>Log In</h1>
            
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="loginEmail" required select>
        
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="loginPassword" required>
        
                <button type="submit" class="btn signIn" id="userLogInButton">Log In</button>
            </form>
        </div> 
            `

        const logInFormContainer = document.querySelector("#popup-container")
        logInFormContainer.innerHTML = logInForm
    },

//Captures Sign Up form inputs to save new user information
getUserInputAndSendToMain() {
    event.preventDefault()
    const firstName = document.querySelector("#firstNameInput").value
    const lastName = document.querySelector("#lastNameInput").value
    const email = document.querySelector("#emailInput").value
    const password = document.querySelector("#passwordInput").value
    const id = document.querySelector("#idInput").value

    /* The below argument is shorthand for:
    {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
        "userID" userID
    } */
   
    // THis returns the new USER object from the database.json
    return data.storeNewUser({firstName, lastName, email, password, id})
    .then(() => data.getUserByEmail(email))
    .then((user) => sessionStorage.setItem("activeUser", user[0].id))
    // sessionStorage.setItem("activeuser", user.id))
    .then(mainPage.buildAndAppendUserMainPage)
},

logInUser() {
    event.preventDefault()
    const email = document.querySelector("#loginEmail").value
    const password = document.querySelector("#loginPassword").value
    getUserByEmail(email).then((user) => sessionStorage.setItem("activeUser", user[0].id))
    .then(mainPage.buildAndAppendUserMainPage)
}
}

export default forms;