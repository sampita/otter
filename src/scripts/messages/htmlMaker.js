// Purpose: This file generates the HTML in the Messages component. Author: Sam Pita

const messagesHtml = {
buildMessagesHTML() {
    return `
    <h3 class="componentTitle" id="messagesTitle">Messages<h3>
    <section id="messageBoard">
    </section>
    <form id="newMessage">
    <textarea cols="40" rows="4" class="messageInput" id="newMessageTextInput" placeholder="Compose new message here..."></textarea>
    <i class="far fa-envelope" id="newMessageSubmitButton"></i>
    </form>
    `
    },

createMessageElementHTML(message) {
    return `
    <article class="messageElement" id="message--${message.id}">
        <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
        <p id="messageElementText">${message.message}</p>
        <div id="messageElementBottomRow">
        <p id="messageTimestamp">${message.timestamp}</p>
        <i class="fas fa-pen" id="editMessage--${message.id}"></i>
        <i class="fas fa-trash-alt" id="deleteMessage--${message.id}"></i>
        </div>
    </article>
    `
    },

createReadOnlyMessageElementHTML(message) {
    return `
    <article class="messageElement" id="message--${message.id}">
    <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
    <p id="messageElementText">${message.message}</p>
    <p id="messageTimestamp">${message.timestamp}</p>
    </article>
    `
    },

buildEditForm(message) {
    return `
        <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
        <input type="text" id="text-edit" value="${message.message}">
        <div id="messageElementBottomRow">
        <p id="messageTimestamp">${message.timestamp}</p>
        <i class="fas fa-save" id="updateMessage--${message.id}"></i>
        </div>
    `
}
}

export default messagesHtml