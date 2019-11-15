// Purpose: This file handles all API requests for the Messages component. Author: Sam Pita

const messagesData = {
    getAllMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    },

    getSingleMessage(messageId) {
        return fetch(`http://localhost:8088/messages/${messageId}?_expand=user`)
        .then(response => response.json())
    },

    storeNewMessage(newMessageObject) {
        return fetch("http://localhost:8088/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMessageObject)
                })
                    .then(messages => messages.json())
    },

    deleteMessage(messageId) {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
          })
            .then(response => response.json())
    },

    updateSingleMessage(message) {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
    }
}

export default messagesData