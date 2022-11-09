const db = require('db_config')

class Post {

    constructor (data) {
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.body = data.body
    }

    static get all () {
        query = 'SELECT * FROM posts;'
    }

    static findById (id) {
        query = `SELECT * FROM posts WHERE id = ${id};`
    }

    static create (data) {
        const { title, name, body} = data;
        query = `INSERT INTO posts (title, name, body) VALUES (${title}, ${name}, ${body}) ;`
    }

}
