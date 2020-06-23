const path = require("path");
const fs = require("fs");
const request = require("request");

let popularDataPath = path.join(__dirname, '../popular-articles.json');//link this to the popular-articles json

request('https://reddit.com/r/popular.json', (error, res, body) => {
    let articles = [];

    if (error) console.log(error);
    
    JSON.parse(body).data.children.forEach(article => {
        debugger; 
        let extractedArticle = {
            "title": article.data.title,
            "url": article.data.url,
            "author": article.data.author
        }
        articles.push(extractedArticle);
    });

    fs.appendFileSync(popularDataPath, JSON.stringify(articles));
});