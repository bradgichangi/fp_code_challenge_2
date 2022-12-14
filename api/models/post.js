const db = require('../db_config')

class Post {

    constructor (data) {
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.body = data.body
    }

    static get all () {
        return new Promise (async (resolve, reject) => {
            try{
                let getPosts = await db.query ('SELECT * FROM posts;')
                let posts = getPosts.rows.map(post => new Post(post))
                resolve(posts)
            }
            catch(err){
                reject('No posts found')
            }
        })
        
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let getPost = await db.query (`SELECT * FROM posts WHERE id = ${id};`)
                let post = new Post(getPost.rows[0])
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static create (data) {
        return new Promise (async (resolve, reject) => {
            try {
                const { title, name, body, date_time} = data;
                console.log("-- server --")
                console.log(data);
                let createPost = await db.query (`INSERT INTO posts (title, name, body, date_time) VALUES ($1, $2, $3, $4) RETURNING *;`, [title, name, body, date_time])
                resolve (createPost.rows[0]);
            } catch (err) {
                console.log(err)
                reject('Post was not created');
            }
        });
    }

}

module.exports = Post
