let backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', () => {
    let login = document.querySelector('.backdrop');
    login.classList.add('displayNone');
})
backdrop.addEventListener('keydown ', (event) => {
    if(event.which ==  27) {
        let login = document.querySelector('.backdrop');
        login.classList.add('displayNone');
    }
})