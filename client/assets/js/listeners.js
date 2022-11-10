const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const nameInput = document.querySelector('#name')
const bodyInput = document.querySelector('#body')
const main = document.querySelector('main')


const fields = [
    { tag: 'input', attributes: { type: 'text', class: 'input-box', name: 'title', id: 'title', placeholder: 'Title' } },
    { tag: 'input', attributes: { type: 'text', class: 'input-box', name: 'name', id: 'name', placeholder: 'Your name' } },
    { tag: 'textarea', attributes: { name: 'body', id: 'body', cols: '30', rows: '10', placeholder: 'Your story . . .' } },
    { tag: 'input', attributes: { type: 'submit', value: 'Publish', id: 'submit-btn'} }
]

async function display() {
    let posts = await getAll()

    for(let i = 0; i < posts.length; i++) {
        let post_container = document.createElement('div')
        post_container.className = 'post'
        let post_title = document.createElement('p')
        post_title.className = 'post-title'
        let post_body = document.createElement('p')
        post_body.className = 'post-body'
        let post_name = document.createElement('p')
        post_name.className = 'post-name'

        post_title.textContent = posts[i].title
        post_body.textContent = posts[i].body
        post_name.textContent = posts[i].name


        post_container.append(post_title)
        post_container.append(post_body)
        post_container.append(`- ${post_name.textContent}`)
        main.append(post_container)
    }
}

function getNow () {
    let date = new Date();
    let year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()
    let hour = date.getHours().toString()
    let minute = date.getMinutes().toString()
 
    return `${hour}:${minute} ${day}/${month}/${year}`
}


async function createPost (e) {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    data['date_time'] = await getNow()
    console.log(data)
    // console.log()
    // console.log(JSON.stringify(Object.fromEntries(new FormData(e.target))))
    post(data)
}

async function createPostScreen() {
    let form = document.createElement('form')
    // let title = document.createElement('input')
    // title.id = 'title'
    // title.className = 'input-box'
    // title.placeholder = 'Title'
    // let name = document.createElement('input')
    // name.id = 'name'
    // name.className = 'input-box'
    // name.placeholder = 'Your name'
    // let body = document.createElement('textarea')
    // body.id = 'body'
    // body.placeholder = 'Your story . . .'
    // body.cols = '30'
    // body.rows = '10'
    // let publish = document.createElement('input')
    // publish.id = 'submit-btn'
    // publish.value = 'Publish'
    // publish.type = 'submit'

    // form.append(title)
    // form.append(name)
    // form.append(body)
    // form.append(publish)

    fields.forEach(f => {
        const field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
        form.appendChild(field);
    })

    main.append(form)

    form.onsubmit = createPost
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
