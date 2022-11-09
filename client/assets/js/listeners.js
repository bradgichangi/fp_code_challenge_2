const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title-input')
const nameInput = document.querySelector('#name-input')
const bodyInput = document.querySelector('#body-input')

// form.addEventListener('submit', createPost)
form.onsubmit = post
