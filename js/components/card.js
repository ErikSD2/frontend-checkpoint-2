class CardComponent extends HTMLElement {

    cards = [
        {id: 'tt8579674',src: './assets/img/1917.png', title: '1917', trailer: 'https://www.youtube.com/embed/_3gy6K7LXHg', description: '1917 conta a história de dois soldados britânicos em um dos momentos mais críticos da Primeira Guerra Mundial. Em uma dramática corrida contra o tempo, os soldados deverão cruzar o território inimigo e entregar uma mensagem que cessará o ataque brutal a milhares.'},
        {id: '404', src: './assets/img/after.png', title: 'after', trailer: '', description: 'After é um filme americano de romance baseado no best-seller e livro homônimo da autora Anna Todd, com direção de Jenny Gage e roteiro de Susan McMartin. O filme é estrelado por Josephine Langford como Tessa Young.'},
        {id: 'tt0235917', src: './assets/img/dora.png', title: 'dora', trailer: 'https://www.youtube.com/embed/gUTtJjV852c', description: 'Ambientado na floresta peruana, o filme narra as aventuras de Dora (Isabella Merced) junto de seu macaco Botas, amigos que acabou de fazer na escola e um misterioso explorador a fim de salvar seus pais de mercenários.'},
        {id: 'tt4154664', src: './assets/img/capita-marvel.png', title: 'capitã marvel', trailer: 'https://www.youtube.com/embed/FV7AxLbHcrE', description: 'Em Capitã Marvel, Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite.'},
        {id: 'tt7286456', src: './assets/img/joker.png', title: 'joker', trailer: 'https://www.youtube.com/embed/t433PEQGErc', description: 'Baseado no personagem de mesmo nome da DC Comics, o filme é estrelado por Joaquin Phoenix como o Coringa. Joker é ambientado em 1981, e representa Arthur Fleck, um comediante de stand-up fracassado, que é levado à loucura e se envolve em uma vida de crimes e caos em Gotham City.'},
        {id: 'tt3501632', src: './assets/img/thor-ragnarok.jpg', title: 'thor ragnarok', trailer: 'https://www.youtube.com/embed/UvNnqWLruXA', description: 'Thor (Chris Hemsworth) estava prestes a receber o comando de Asgard das mãos de seu pai Odin (Anthony Hopkins) quando forças inimigas quebraram um acordo de paz.'},
    ];

    constructor() {
        super();
        this.shadow = this.build()
        this.eventsComponents()
    }

    build() {
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.styles());
        this.cards.map(cardInfo => {
            shadow.appendChild(this.component(cardInfo))
        })

        return shadow
    }

    component(card) {
        let cardWrapper = document.createElement('article');
        cardWrapper.setAttribute('class', 'card');

        let { id, src, title, trailer, description } = card;

        cardWrapper.innerHTML = `
            <img class="card__banner" src="${src}" alt="${title}">
            <div class="card__info">
                <h2 class="card__title">${title}</h2>
                <p class="card__description">${description.substr(0,42)}...</p>
                <button class="card__button" onclick="buscarFilme('${id}', '${trailer}')">Abrir</button>
            </div>
        `
        return cardWrapper
    }

    eventsComponents() {
        let description = this.shadowRoot.querySelectorAll('.card__description');
        description.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.innerHTML = this.cards[index].description;
            })
        })

        description.forEach((item, index) => {
            item.addEventListener('mouseout', () => {
                item.innerHTML = `${this.cards[index].description.substr(0,42)}...`;
            })
        })
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
                border-radius: 14px;
                height: 500px;
                object-fit: cover;
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
                height: 35%;
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