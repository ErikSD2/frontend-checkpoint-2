let filme = localStorage.getItem('filme');
let {title, image, plot, directors, writerList} = JSON.parse(filme)

let imgImage = document.querySelector('#image');
imgImage.src = image;

let divTitle = document.querySelector('#title');
divTitle.innerHTML = title;

let divPlot = document.querySelector('#plot');
divPlot.innerHTML = plot;

let divDirector = document.querySelector('.director');
let achorDirector = document.createElement('a');
achorDirector.setAttribute('href', '#');
achorDirector.innerHTML = directors;
divDirector.appendChild(achorDirector);

let divWriter = document.querySelector('.escritor');
writerList.map(writer => {
    let achorWriter = document.createElement('a');
    achorWriter.setAttribute('href', '#');
    achorWriter.innerHTML = writer.name;
    divWriter.appendChild(achorWriter);
})

let youtube = document.querySelector('.youtube');
let trailer = localStorage.getItem('trailer');
youtube.setAttribute('src', trailer);

