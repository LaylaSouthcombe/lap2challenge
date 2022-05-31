const db = require ('../dbConfig')

class Article {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.body = data.body
        this.url_end = data.url_end
    }

    // static findById(id) {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let articleData = await db.query(`SELECT * FROM articles WHERE id = $1;`, [ id ]);
    //             let article = new Article(articleData.rows[0])
    //             resolve(article);
    //         } catch (err) {
    //             reject('Article not found');
    //         }
    //     })
    // }

    static findByUrlEnd(url_end) {
        return new Promise (async (resolve, reject) => {
            try {
                let articleData = await db.query(`SELECT * FROM articles WHERE url_end = $1;`, [ url_end ]);
                let article = new Article(articleData.rows[0])
                resolve(article);
            } catch (err) {
                reject('Article not found');
            }
        })
    }
    static create(title, name, body, url_end){
        return new Promise (async (resolve, reject) => {
            try {
                let articleData = await db.query(`INSERT INTO articles (title, name, body, url_end) VALUES ($1, $2, $3, $4) RETURNING *;`, [ title, name, body, url_end ]);
                let newArticle = new Article(articleData.rows[0]);
                resolve (newArticle);
            } catch (err) {
                reject('Error creating article');
            }
        });
    }
};

module.exports = Article;