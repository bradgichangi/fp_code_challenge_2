async function getAll(){
    try {
        let postsJson;
        await fetch(`http://localhost:3000/posts`)
        .then(data => {
            postsJson = data.json(); 
            return postsJson})
        return postsJson;
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
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        
        const response = await fetch('http://localhost:3000/posts', options);

        console.log("Post created")
    } catch (err) {
        console.warn(err);
    }
}

