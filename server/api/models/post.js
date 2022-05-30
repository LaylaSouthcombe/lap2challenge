const db = require ('../dbConfig')

class Article {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.body = data.body
        this.url_end = data.url_end
    }

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let articleData = await db.query(`SELECT * FROM articles WHERE id = $1;`, [ id ]);
                let article = new Article(articleData.rows[0])
                resolve(article);
            } catch (err) {
                reject('Article not found');
            }
        })
    }
};

module.exports = Article;