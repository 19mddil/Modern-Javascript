class Article {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }
    static provideArticleGenericObject() {
        return new this("Hello World,today no news", new Date());
    }
}
let article = Article.provideArticleGenericObject();
console.log(article);