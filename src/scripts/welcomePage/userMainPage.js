// This file is responsible for building the main page after user logs in

// This should be the injector for the next page call
const mainPage = {
buildAndAppendUserMainPage: () => {
    const mainPageHtml = `
    <nav id="navBar">
    <ul class="topnav">
    <img class="left" src="src/images/otter1.png">
    <li id="logoutButton">Logout</li>
    </ul>
    </nav>
    <div id="main-page">
      <section id="left-container">
        <div id="friends-container">Friends</div>
        <div id="events-container">Events</div>
      </section>
      <section id="center-container">
        <div id="messages-container"></div>
        <div id="news-container">
        <h3 class="componentTitle">News</h3>
            <div id="news-popup-container">
            </div>
        </div>
      </section>
      <section id="right-container">
        <div id="toDo-container">ToDo</div>
        <div id="popup-container"></div>
      </section>  
    </div>
    <div class="footer">
        <p>Made By: Charles Jackson, Jeremiah Bell, Michelle Johnson, Sam Pita</p>
    </div>
    `
    const mainPageContainer = document.querySelector("#page-container")
    mainPageContainer.innerHTML = mainPageHtml
    }
}

export default mainPage