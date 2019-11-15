// author: Michelle Johnson
// purpose: fetch calls to database
// Use `fetch` with the POST method to add your entry to your API
export default {
    saveEventEntry: (event) => { //rename variable
        return fetch("http://localhost:8088/events", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
    },
    getAllEvents() {
        return fetch("http://localhost:8088/events")
            .then(response => response.json())
    },
    deleteEvent(eventId) {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    updateSingleEvent (eventObject, id) {
        return fetch(`http://localhost:8088/events/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    },
    
    // getSingleJournalEntry (id) {
    //     return fetch(`http://localhost:8088/events/${id}`)
    //         .then(response => response.json())
    // }
    
}