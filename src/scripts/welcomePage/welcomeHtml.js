export default {
    buildAndAppendWelcomePageHtml: () => {
    const welcomeHtml =  `     
    <nav id="navBar">
        <ul class="topnav">
        <img class="left" src="src/images/otter1.png">
        </ul>
    </nav>
    <div id="welcome-page">
        <h1>Welcome to Otter</h1>
        <button id = "signUpButton">Sign Up</button>
        <p class="hyperlink" id="logInButton">Already have an account? Click here to login.</p>
        <div id="popup-container"></div>
    </div>
    <div class="footer">
        <p>Made By: Charles Jackson, Jeremiah Bell, Michelle Johnson, Sam Pita</p>
    </div>
`

        const welcomePageContainer = document.querySelector("#page-container")
        welcomePageContainer.innerHTML = welcomeHtml
    }
   
}

