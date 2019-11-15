// author: Michelle Johnson
// purpose: eventListeners for buttons
import data from "../events/data.js"
import render from "../events/domRender.js"
import form from "../events/formHtml.js"

export default {
    addEventListenerToAddEventButton: () => {
        document.querySelector("#addEventButton").addEventListener("click", e => {
            const name = document.querySelector("#nameOfEvent").value
            const date = document.querySelector("#eventDate").value
            const location = document.querySelector("#eventLocation").value
            const userId = parseFloat(sessionStorage.getItem("activeUser"))


            //save journal entry (json-server returns it) then render it
            data.saveEventEntry({ name, date, location, userId })

                .then(data.getAllEvents)
                .then(response => {
                    render.renderEvent(response)
                    document.querySelector("#nameOfEvent").value = ""
                    document.querySelector("#eventDate").value = ""
                    document.querySelector("#eventLocation").value = ""
                })

        })
    },
    makeEventComponent: (eventEntry) => {
        return `
            <section>
                <h3>${eventEntry.name}</h3>
                <p>${eventEntry.date}</p>
                <p>${eventEntry.location}</p>
                <i class="fas fa-pen" id="editEvent--${eventEntry.id}"></i>
                <i class="fas fa-trash-alt" id="deleteEvent--${eventEntry.id}"></i>
            </section>
            `
    },
    deleteButtonListener() {
        const deleteEvent = document.querySelector(".eventLog")

        deleteEvent.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEvent--")) {
                // Extract event id from the button's id attribute
                const eventToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all events and render them
                data.deleteEvent(eventToDelete)
                    .then(data.getAllEvents)
                    .then(response => render.renderEvent(response))
            }
        })
    },
    updateFormFields(eventId) {

        fetch(`http://localhost:8088/events/${eventId}`)
            .then(response => response.json())
            .then(event => {
                form.buildAndAppendEventCalendar("edit")

                // Get reference to input fields in the form
                const hiddenEventId = document.querySelector("#eventId")
                const eventName = document.querySelector("#nameOfEvent")
                const eventLocation = document.querySelector("#eventLocation")
                const eventDate = document.querySelector("#eventDate")


                hiddenEventId.value = event.id
                eventName.value = event.name
                eventLocation.value = event.location
                eventDate.value = event.date
            })
    },
    editButtonListener() {
        const eventList = document.querySelector(".eventLog")
        eventList.addEventListener("click", event => {
            if (event.target.id.startsWith("editEvent--")) {
                const eventIdToEdit = event.target.id.split("--")[1]

                this.updateFormFields(eventIdToEdit)
            }
        })
    },
    addEventListenerToSaveChangesButton: () => {
        document.querySelector("#saveChanges").addEventListener("click", e => {
            const eventId = document.querySelector("#eventId").value
            const name = document.querySelector("#nameOfEvent").value
            const date = document.querySelector("#eventDate").value
            const location = document.querySelector("#eventLocation").value
            const userId = parseFloat(sessionStorage.getItem("activeUser"))
    
            //save journal entry (json-server returns it) then render it
            data.updateSingleEvent({ name, date, location, userId}, eventId)
                .then(data.getAllEvents)
                .then(response => {
                    form.buildAndAppendEventCalendar()
                    render.renderEvent(response)
                    document.querySelector("#nameOfEvent").value = ""
                    document.querySelector("#eventDate").value = ""
                    document.querySelector("#eventLocation").value = ""
                })
    
        })
        
       
    }
}