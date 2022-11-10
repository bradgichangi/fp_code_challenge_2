// const main = document.querySelector('main');

window.addEventListener('hashchange', updateContent);

async function loadIndexFor(){
    modal.style.display = 'none';
    const data = await getAll();
    data.forEach(a => renderCard(a, category));
}

function updateMain(hash) {
    main.innerHTML = '';
    if (hash) {
        let [category, id] = hash.split('/');
        id ? getPost(id) : display()
    } else {
        const header = document.createElement('h1');
        header.className = 'title';
        header.textContent = "Welcome to Post It";
        main.appendChild(header);
    }
}


function updateContent(){
    let hash = window.location.hash.substring(1);
    updateMain(hash);
}
