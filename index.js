const ARTICLE_DIR = "articles"
const OWNER = "LucaG-17"
const REPO = "SETI_STA"

window.onload = async function populateArticles() {
    const articleUrl =  `https://api.github.com/repos/${OWNER}/${REPO}/contents/${ARTICLE_DIR}`;
    try {
        const response = await fetch(articleUrl)
        const files = await response.json()
        console.log(files)
    } catch (error) {
        console.error("Error fetching article list:", error);
    }
}