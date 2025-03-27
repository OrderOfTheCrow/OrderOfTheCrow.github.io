const ARTICLE_DIR = "articles";
const OWNER = "Luca-G17";
const REPO = "SETI_STA";

window.onload = async function populateArticles() {
    const articleUrl =  `https://api.github.com/repos/${OWNER}/${REPO}/contents/${ARTICLE_DIR}`;
    try {
        const response = await fetch(articleUrl)
        const files = await response.json();
        const template = document.getElementById("article_template");

        files.forEach(file => {
            if (file.name.endsWith(".pdf") || file.name.endsWith(".docx")) {
                let article = template.cloneNode(true);
                let title = article.getElementsByTagName("p")[0];

                article.id = file.name;
                title.innerText = file.name.split(".")[0];

                article.addEventListener("click", function(){
                    const a = document.createElement("a");
                    a.href = file.download_url;
                    article.appendChild(a);
                    a.click();
                    article.removeChild(a);
                });
                template.parentNode().appendChild(article);
            }
        });
    } catch (error) {
        console.error("Error fetching article list:", error);
    }
}