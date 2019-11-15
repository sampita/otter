import messagesForm from "./formManager.js"
import messagesData from "./data.js"
import messagesHtml from "./htmlMaker.js"
import dom from "./domRenderer.js"

// Purpose: This file contains all of the event listeners within the Messages component. Author: Sam Pita

const messagesEvents = {
    createNewMessageButtonHandler() {
        const createNewMessageButton = document.querySelector("#newMessageSubmitButton")
        createNewMessageButton.addEventListener("click", () => {
        messagesForm.getNewMessageInput()
        })
    },

    handleMessageBoardEvent(event) {
        const idAttribute = event.target.id
        const messageId = idAttribute.split("--")[1]
        if (idAttribute.includes("editMessage--")) {
            //fetch request to GET single message
            messagesData.getSingleMessage(messageId)
            .then(response => {
                    //build edit form with populated values
                    const messageElementRef = document.querySelector(`#message--${messageId}`)
                    messageElementRef.innerHTML = messagesHtml.buildEditForm(response)
                })
        }
            else if (idAttribute.includes("updateMessage--")) {
            const newMessage = document.querySelector("#text-edit").value
            //THIS IS MY "PUT" OBJECT
            const updatedMessage = {
                userId: Number(sessionStorage.getItem("activeUser")),
                message: newMessage,
                timestamp: Date(),
                id: messageId,
            }
            // PUT request to update existing message
            messagesData.updateSingleMessage(updatedMessage)
                .then(() => messagesData.getAllMessages())
                .then(response => {
                    dom.renderAllMessagesToDom(response)
                })
            }
                else if (idAttribute.includes("deleteMessage--")) {
                    messagesData.deleteMessage(messageId)
                        .then(() => messagesData.getAllMessages())
                        .then(response => {
                            dom.renderAllMessagesToDom(response)
                        })
                }
        },

    attachMessageElementBttnHandlers() {
            const messageBoard = document.querySelector("#messageBoard")
            messageBoard.addEventListener("click", this.handleMessageBoardEvent)
        }
       

}

export default messagesEvents