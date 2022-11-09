// const form = document.querySelector('#post-form')
// const titleInput = document.querySelector('#title-input')
// const nameInput = document.querySelector('#name-input')
// const bodyInput = document.querySelector('#body-input')
// const main = document.querySelector('main')

// form.addEventListener('submit', getAll)

// fetch(`http://localhost:3000/posts`).then(data => data.json()).then(data => console.log(data))

async function getAll(){
    // e.preventDefault()
    try {
        let ret;
        await fetch(`http://localhost:3000/posts`).then(data => {ret = data.json(); return ret})
        console.log(ret)
        // const response = fetch(`http://localhost:3000/posts`);
       
        // console.log(response)
        //  const data = response.json()
        return ret;
    } catch (err) {
        console.log(err)
        console.warn(err);
    }
}

async function getItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}


async function post(data){
    try {
        console.log(data)
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        
        const response = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await response.json();

        console.log("Post created")

    } catch (err) {
        console.warn(err);
    }
}

