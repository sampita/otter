import messagesData from "./data"
import dom from "./domRenderer.js"

// Purpose: This file manages the input forms in the Messages component. Author: Sam Pita

const messagesForm = {
    getNewMessageInput() {
        const userId = parseFloat(sessionStorage.getItem("activeUser"))
        const message = document.querySelector("#newMessageTextInput").value
        const timestamp = Date()

        return messagesData.storeNewMessage({userId, message, timestamp})
            .then(messagesData.getAllMessages)
            .then(dom.renderAllMessagesToDom)
            .then(document.getElementById("newMessage").reset())
    }
}

export default messagesForm