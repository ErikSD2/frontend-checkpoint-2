let backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', () => {
    let login = document.querySelector('.backdrop');
    login.classList.add('displayNone');
})

let modalContainer = document.querySelector('.modal-container')
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
})

backdrop.addEventListener('keydown ', (event) => {
    if(event.which ==  27) {
        let login = document.querySelector('.backdrop');
        login.classList.add('displayNone');
    }
})