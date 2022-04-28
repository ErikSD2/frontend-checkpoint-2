let filme = localStorage.getItem('filme');
let {id, title = "404", image, plot, directors, writerList} = JSON.parse(filme)

if( id == null ) {
    let main = document.querySelector('main');
    main.innerHTML = ``

    let img = document.querySelector('#image');
    img.style.background = `center / 70% url(./assets/img/404.png) no-repeat`; 
}

let imgImage = document.querySelector('#image');
imgImage.src = image;

let divTitle = document.querySelector('#title');
divTitle.innerHTML = title;

let divPlot = document.querySelector('#plot');
if (!!divPlot) divPlot.innerHTML = plot;

let divDirector = document.querySelector('.director__name');
let achorDirector = document.createElement('a');
achorDirector.setAttribute('href', '#');
achorDirector.classList.add('elenco');
achorDirector.innerHTML = directors || "Não há dados";
if(!!divDirector) divDirector.appendChild(achorDirector);

let divWriter = document.querySelector('.escritores__list');
if(!!writerList) {
    writerList.map(writer => {
        let achorWriter = document.createElement('a');
        achorWriter.setAttribute('href', '#');
        achorWriter.classList.add('elenco');
        achorWriter.innerHTML = writer.name;
        divWriter.appendChild(achorWriter);
    })
    if (writerList.length == 0) {
        let achorWriter = document.createElement('a');
        achorWriter.setAttribute('href', '#');
        achorWriter.classList.add('elenco');
        achorWriter.innerHTML = "Não há dados";
        divWriter.appendChild(achorWriter);
    }
}

let youtube = document.querySelector('.youtube');
let trailer = localStorage.getItem('trailer');
if(!!youtube) youtube.setAttribute('src', trailer);

let tituloFilme = document.querySelector('title');
if(title == null){ 
    tituloFilme.innerHTML = `404`;
}
else
    tituloFilme.innerHTML = `${title} - DH Flix`;
    