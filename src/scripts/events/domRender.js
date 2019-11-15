// author: Michelle Johnson
// purpose: rendering onto the DOM
import make from "../events/eventListeners.js"

export default {
        renderEvent: (events) => {
            let HtmlForAllEvents = ""
            events.forEach(event => {
                const eventHtml = make.makeEventComponent(event)
                HtmlForAllEvents += eventHtml
            })
            const logArticle = document.querySelector(".eventLog")
            logArticle.innerHTML = HtmlForAllEvents
        }
}