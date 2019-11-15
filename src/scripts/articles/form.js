//PURPOSE: TO HOST THE HTML LAYOUT FOR ALL NEWS SECTION FORMS

const newsFormsObject = {

    buildAndAppendNewArticleForm: () => {
        const formThatAppearsAfterNewArticleButtonisClicked = `

        <form id = "newArticleContainer">
        <h3>New Article</h3>

        <input type = "hidden" id = "newsIdInput">

        <label for="articleTitle"><b>Article Title:</b></label>
        <input type="text" placeholder="Enter News Article Title" id="newsTitleInput">
        <br><br>

        <label for="articleSynopsis"><b>Article Synopsis:</b></label>
        <textarea placeholder="Give a brief summary of the article" id="newsSynopsisInput" rows="3" cols="40"></textarea>
        <br><br>

        <label for="articleURL"><b>Article URL:</b></label>
        <input type="text" placeholder="Place article URL here" id="articleUrlInput">
        <br><br>

        <button id = "save-article-button">Save Article</button>
        
        </form>

        `
        const popUpContainer = document.querySelector("#newArticleForm-PopupContainer")
        popUpContainer.innerHTML = formThatAppearsAfterNewArticleButtonisClicked
    }
}

export default newsFormsObject