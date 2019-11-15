//*** PURPOSE: TO HOST ALL EVENT LISTENERS FOR THE NEWS SECTION ***

import API from "./data.js"
import newsDom from "./articleDomRenderer.js"
//*************************************************************************
//  New Article Button. When clicked, it takes you to the New Article Form.
//*************************************************************************

const newsEventListeners = {

    clickNewArticleHandler: () => {
        const clickNewArticleButton = document.querySelector("#new-article-button")
        clickNewArticleButton.addEventListener("click", () => {
            document.querySelector("#newArticleContainer").style.display = "block" //<-- block ???
        })

    },

    clickSaveArticleHandler: () => {
        const clickSaveArticleButton = document.querySelector("#save-article-button")
            .addEventListener("click", () => {
                event.preventDefault()
                console.log("clicked")
                const title = document.querySelector("#newsTitleInput").value
                const synopsis = document.querySelector("#newsSynopsisInput").value
                const url = document.querySelector("#articleUrlInput").value
                const userId = sessionStorage.getItem("activeUser")

                //save journal entry (json-server returns it) then render it
                const inputFactory = (title, synopsis, url, userId) => {
                    return {
                        "title": title,
                        "synopsis": synopsis,
                        "url": url,
                        "userId": userId
                    }
                }
                const articleObject = inputFactory(title, synopsis, url, userId)
                console.log(articleObject)

                API.saveArticleEntry(articleObject) //POST
                    .then(API.getAllArticles) //GET
                    .then(response => newsDom.renderArticle(response)) //RENDER
            })
    },

    // clickDeleteArticleHandler: () => {
    //     const clickDeleteArticleButton = document.querySelector("#deleteArticle")
    //     clickDeleteArticleButton.addEventListener("click", event => {
    //         if (event.target.id.startsWith("deleteArticle--")) {
    //             // Extract recipe id from the button's id attribute
        
    //             const articleToDelete = event.target.id.split("--")[1]

    //             // Invoke the delete method, then get all recipes and render them
    //             API.deleteArticleEntry(articleToDelete)
    //                 .then(API.getAllArticles)
    //                 .then(render)
    //         }
    //     })
    // }
}

export default newsEventListeners