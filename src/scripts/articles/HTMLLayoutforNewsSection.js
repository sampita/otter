import newsFormsObject from "./form.js"



const newsHtmlLayout = {
    buildAndAppendNewsSectionHtml() {
        const newsHtml = `
       <h3 class="componentTitle">News<h3>
       <button id = "new-article-button"> New Article </button>
       <section id = "articlesDisplayContainer"></section>  

        <div id="newArticleForm-PopupContainer"> </div>        
    `
        const newsContainer = document.querySelector("#news-container")
        newsContainer.innerHTML = newsHtml
        newsFormsObject.buildAndAppendNewArticleForm()

    },

    makeArticleComponent: (articleEntryTaco) => {
        return `
            <section>
                <h3>${articleEntryTaco.title}</h3>
                <p>${articleEntryTaco.synopsis}</p>
                <p>${articleEntryTaco.url}</p>
                <button id="editArticle--${articleEntryTaco.id}">Edit Article</button>
                <button id="deleteArticle--${articleEntryTaco.id}">Delete Article</button>
            </section>
            `
    }
}

export default newsHtmlLayout