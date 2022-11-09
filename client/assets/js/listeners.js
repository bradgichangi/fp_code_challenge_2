const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title-input')
const nameInput = document.querySelector('#name-input')
const bodyInput = document.querySelector('#body-input')
const main = document.querySelector('main')

form.addEventListener('submit',createPost)

async function display() {
    let posts = await getAll()
    console.log(posts)
    for (let post in posts) {
        let p = document.createElement('p')
        p.textContent = post
        main.append(p)
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
