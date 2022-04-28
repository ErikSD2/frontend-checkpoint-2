let backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', () => {
    backdrop.classList.add('displayNone');

    let body = document.querySelector('body')
    body.classList.remove('overflow');
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