const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const nameInput = document.querySelector('#name')
const bodyInput = document.querySelector('#body')
const main = document.querySelector('main')

form.addEventListener('submit',createPost)

async function display() {
    
    let posts = await getAll()
    console.log(posts)
    for(let i = 0; i < posts.length; i++) {
        let post_container = document.createElement('div')
        post_container.className = 'post'
        post_container.id = i+1;
        let post_title = document.createElement('p')
        post_title.className = 'post-title'
        let post_name = document.createElement('p')
        post_name.className = 'post-name'
        let post_body = document.createElement('p')
        post_body.className = 'post-body'
        let post_date = document.createElement('p')
        post_date.className = 'post-date'

        post_title.textContent = posts[i].title
        post_name.textContent = posts[i].name
        post_body.textContent = posts[i].body
        post_date.textContent = posts[i].date

        post_container.append(post_title)
        post_container.append(post_name)
        post_container.append(post_body)
        post_container.append(post_date)
        main.append(post_container)

        post_container.addEventListener('click', () => {console.log(post_container.id)
        window.location.href = `#posts/${post_container.id}`
        })
    }
}

function getNow () {
    let date = new Date().toString();
    let year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()
    let hour = date.getHours().toString()
    let minute = date.getMinutes().toString()
 
    return `${hour}:${minute} ${day}/${month}/${year}`
}


function createPost () {
    let data = {
        title: titleInput.value,
        name: nameInput.value,
        body: bodyInput.value,
        date: getNow()
    }
    console.log(data)
    post(data)
}

async function createPostScreen() {
    let form = document.createElement('form')
    let title = document.createElement('input')
    title.id = 'title'
    title.className = 'input-box'
    title.placeholder = 'Title'
    let name = document.createElement('input')
    name.id = 'name'
    name.className = 'input-box'
    name.placeholder = 'Your name'
    let body = document.createElement('textarea')
    body.id = 'body'
    body.placeholder = 'Your story . . .'
    body.cols = '30'
    body.rows = '10'
    let publish = document.createElement('input')
    publish.id = 'submit-btn'
    publish.value = 'Publish'
    publish.type = 'submit'

    form.append(title)
    form.append(name)
    form.append(body)
    form.append(publish)
    main.append(form)
}

async function getPost (id) {

    let this_post = await getItem(id)

    let post_container = document.createElement('div')
    post_container.className = 'post'
    let post_title = document.createElement('p')
    post_title.className = 'post-title'
    let post_name = document.createElement('p')
    post_name.className = 'post-name'
    let post_body = document.createElement('p')
    post_body.className = 'post-body'
    let post_date = document.createElement('p')
    post_date.className = 'post-date'

    post_title.textContent = this_post.title
    post_name.textContent = this_post.name
    post_body.textContent = this_post.body
    post_date.textContent = this_post.date

    post_container.append(post_title)
    post_container.append(post_name)
    post_container.append(post_body)
    post_container.append(post_date)
    main.append(post_container)
}

display()
