    
async function buscarFilme(filme, trailer) {
    await fetch(`https://imdb-api.com/pt-br/API/Title/k_lnmf1a2b/${filme}`)
    .then(response => response.text())
    .then(result => localStorage.setItem('filme', result))
    .catch(error => console.log('error', error));

    localStorage.setItem('trailer', trailer);

    window.location.href = 'filme.html'
}