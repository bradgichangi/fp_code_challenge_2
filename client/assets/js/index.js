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
        fetch(`http://localhost:3000/posts`).then(data => {ret = data.json(); return ret}).then(data => console.log(data))
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
    // e.preventDefault();
    try {
        console.log(data)
        // const formData = new FormData(e.target);
        // const formProps = Object.fromEntries(formData);
        // console.log(JSON.stringify(Object.fromEntries(new FormData(e.target))))
        // console.log(formProps)
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        
        const response = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            // window.location.hash = `#posts/${id}`
            console.log("Post created")
        }
    } catch (err) {
        console.warn(err);
    }
}

