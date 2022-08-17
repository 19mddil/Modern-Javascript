class Article {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }
    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}
let articles = [
    new Article("Html", new Date(2019, 1, 1)),
    new Article("Css", new Date(2012, 8, 8)),
    new Article("Javascript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles);