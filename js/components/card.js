class CardComponent extends HTMLElement {

    cards = [
        {src: './../assets/img/1917.png', title: '1917', description: '1917 conta a história de dois soldados britânicos em um dos momentos mais críticos da Primeira Guerra Mundial. Em uma dramática corrida contra o tempo, os soldados deverão cruzar o território inimigo e entregar uma mensagem que cessará o ataque brutal a milhares.'},
        {src: './../assets/img/after.png', title: 'after', description: 'After é um filme americano de romance baseado no best-seller e livro homônimo da autora Anna Todd, com direção de Jenny Gage e roteiro de Susan McMartin. O filme é estrelado por Josephine Langford como Tessa Young.'},
        {src: './../assets/img/dora.png', title: 'dora', description: 'Ambientado na floresta peruana, o filme narra as aventuras de Dora (Isabella Merced) junto de seu macaco Botas, amigos que acabou de fazer na escola e um misterioso explorador a fim de salvar seus pais de mercenários.'},
        {src: './../assets/img/capita-marvel.png', title: 'capitã marvel', description: 'Em Capitã Marvel, Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite.'},
        {src: './../assets/img/joker.png', title: 'joker', description: 'Baseado no personagem de mesmo nome da DC Comics, o filme é estrelado por Joaquin Phoenix como o Coringa. Joker é ambientado em 1981, e representa Arthur Fleck, um comediante de stand-up fracassado, que é levado à loucura e se envolve em uma vida de crimes e caos em Gotham City.'},
        {src: './../assets/img/thor.png', title: 'thor', description: 'Thor (Chris Hemsworth) estava prestes a receber o comando de Asgard das mãos de seu pai Odin (Anthony Hopkins) quando forças inimigas quebraram um acordo de paz.'},
    ];

    constructor() {
        super();
        this.build()
    }

    build() {
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.styles());
        this.cards.map(cardInfo => {
            shadow.appendChild(this.component(cardInfo))
        })
    }

    component(card) {
        let cardWrapper = document.createElement('article');
        cardWrapper.setAttribute('class', 'card');

        let { src, title, description } = card;

        cardWrapper.innerHTML = `
            <img class="card__banner" src="${src}" alt="${title}">
            <div class="card__info">
                <h2 class="card__title">${title}</h2>
                <p class="card__description">${description}</p>
                <button class="card__button">Abrir</button>
            </div>
        `
        return cardWrapper
    }

    styles() {
        let style = document.createElement('style');
        style.innerHTML = `
            * {
                box-sizing: border-box;
                font-family: Helvetica, Arial, sans-serif;
            }
            
            .card {
                position: relative;
                transition: transform 0.1s ease;
                width: 100%;
                z-index: 0;
            }

            .card:active {
                transform: scale(.98);
            }
            
            .card:hover .card__info {
                height: 60%;
                background-color: rgba(244, 244, 244, .9);
            }
            
            .card__banner {
                width: 100%;
                border-radius: 7px;
            }
            
            .card__info {
                background-color: #F4F4F4;
                bottom: 4px;
                border-radius: 7px;
                position: absolute;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 24px 16px;
                height: initial;
                transition: all .5s ease;
            }
            
            .card__title {
                margin: 0;
                text-transform: capitalize;
            }
            
            .card__description {
                flex: 1;
            }
            
            .card__button {
                background-color: #33BB69;
                border: none;
                border-radius: 7px;
                cursor: pointer;
                color: #fff;
                height: 40px;
                transition: background-color .5s ease;
            }

            .card__button:hover {
                background-color: #2E9F5E;
            }
        `
        return style;
    }
}

customElements.define('card-component', CardComponent);