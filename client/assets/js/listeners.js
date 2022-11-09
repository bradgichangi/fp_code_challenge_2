const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const nameInput = document.querySelector('#name')
const bodyInput = document.querySelector('#body')
const main = document.querySelector('main')

form.addEventListener('submit',createPost)

async function display() {
    let posts = await getAll()

    for(let i = 0; i < posts.length; i++) {
        let post_container = document.createElement('div')
        post_container.className = 'post'
        let post_title = document.createElement('p')
        post_title.className = 'post-title'
        let post_name = document.createElement('p')
        post_name.className = 'post-name'
        let post_body = document.createElement('p')
        post_body.className = 'post-body'

        post_title.textContent = posts[i].title
        post_name.textContent = posts[i].name
        post_body.textContent = posts[i].body

        post_container.append(post_title)
        post_container.append(post_name)
        post_container.append(post_body)
        main.append(post_container)
    }
}

function createPost (e) {
    e.preventDefault()
    let data = {
        title: titleInput.value,
        name: nameInput.value,
        body: bodyInput.value
    }
    console.log(data)
    post(data)
}

display()
