const db = require ('../dbConfig')

class Post {
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
                let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0])
                resolve(post);
            } catch (err) {
                reject('Post not found');
            }
        })
    }


}