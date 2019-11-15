import messagesHtml from "./htmlMaker.js"
import messagesData from "./data.js"
//Purpose: This file injects components onto the DOM. Author: Sam Pita

const dom = {
renderMessagesContainerToDom() {
    const messagesContainer = document.querySelector("#messages-container")
    const messagesHTML = messagesHtml.buildMessagesHTML()
    messagesContainer.innerHTML = messagesHTML
    },

renderAllMessagesToDom(messages) {
    const messageBoard = document.querySelector("#messageBoard")
    messageBoard.innerHTML = ""
    messages.forEach(message => {
        const activeUser = sessionStorage.getItem("activeUser")
        if (Number(activeUser) === message.userId) {
        let messageElementHTML = messagesHtml.createMessageElementHTML(message)
        messageBoard.innerHTML += messageElementHTML
        } else {
        let readOnlyMessageElementHTML = messagesHtml.createReadOnlyMessageElementHTML(message)
        messageBoard.innerHTML += readOnlyMessageElementHTML
        }
    })
    }
}

export default dom