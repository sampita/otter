import newsDom from "./articleDomRenderer"

const API = {

    getAllArticles() {
        return fetch("http://localhost:8088/articles")
            .then(response => response.json())
    },


saveArticleEntry: (newArticle) => {    //article is a taco variable
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    })
    .then(response => response.json())
},

deleteArticleEntry: (articleId) => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
},

}

export default API