window.addEventListener('hashchange', updateContent);

function displayPage(id){
    if(id === 'new') createPostScreen()
    else getPost(id)
}

function displayHome() {
    const header = document.createElement('h1');
    header.className = 'title';
    header.textContent = "Welcome to Post It";
    main.appendChild(header);
}

function updateMain(hash) {
    main.innerHTML = '';
    if (hash) {
        let [category, id] = hash.split('/');
        id ? displayPage(id) : display()
    } else {
        displayHome()
    }
}

function updateContent(){
    let hash = window.location.hash.substring(1);
    updateMain(hash);
}

displayHome()
