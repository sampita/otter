// author:Michelle Johnson
// purpose: build and append form
import eventListener from "../events/eventListeners"
import eventListeners from "../events/eventListeners"

const eventCalendar = {
    buildAndAppendEventCalendar: (entry) => {
        let calendar = `
        <h3 class="componentTitle">Events</h3>
            <form>
                <input type="hidden" id="eventId" value="" />

                <fieldset class="form-fieldset">
                    <label id="name" for="nameOfEvent">Name of Event</label>
                    <input type="text" name="nameOfEvent" id="nameOfEvent" placeholder="Name">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="date" for="eventDate">Date of Event</label>
                    <input type="date" name="eventDate" id="eventDate">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="location" for="eventLocation">Event Location</label>
                    <textarea name="eventLocation" id="eventLocation" placeholder = "Address" cols="20" rows="1"></textarea>
                </fieldset>
            </form>

            
            `
        const calendarContainer = document.querySelector("#events-container")
        if (entry === "edit") {
            calendarContainer.innerHTML = ""
            calendarContainer.innerHTML = calendar += `
                    <button id="saveChanges">Save Changes</button>
                    <article class="eventLog"></article>
                    `
            eventListener.addEventListenerToSaveChangesButton()

        } else {
            calendarContainer.innerHTML = ""
            calendarContainer.innerHTML = calendar += `
                    <button id="addEventButton">Add Event</button>
                    <article class="eventLog"></article>`
            eventListeners.addEventListenerToAddEventButton()
            eventListener.deleteButtonListener()
            eventListener.editButtonListener()
        }

    }


}

export default eventCalendar