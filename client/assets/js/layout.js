window.addEventListener('hashchange', updateContent);

function displayPage(id){
    if(id === 'new') createPostScreen()
    else getPost(id)
}

function displayHome() {
    const div = document.createElement('div')
    div.id = 'home-div'
    const header = document.createElement('h1');
    header.className = 'title';
    header.textContent = "Welcome to Post It";
    const createBtn = document.createElement('a')
    createBtn.id = 'home-btn'
    createBtn.href = '#posts/new'
    createBtn.textContent = 'Make A Post'
    div.appendChild(header);
    div.appendChild(createBtn);
    main.append(div)
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
