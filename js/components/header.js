class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.build();
        this.eventsComponents();
    }
    
    build() {
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.styles());
        shadow.appendChild(this.component());
       
        return shadow
    }

    component() {
        let div = document.createElement('div');
        div.setAttribute('class', 'header__wrapper');
        div.innerHTML = `
            <div class="header__container">
                <img src="./assets/img/logo-dh.png" alt="Logo">
                <img class="menu-mobile" src="./assets/img/menu.png" alt="menu">
                <nav class="nav">
                <ul class="nav__list">
                    <li class="active"><a href="./index.html">Home</a></li>
                    <li><a href="index.html#filmes">Itens</a></li>
                    <li><a href="#footer">Sobre Nós</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                </nav>
            </div>
        `;

        return div;
    }

    eventsComponents() {
        let listItems = this.shadowRoot.querySelectorAll('li');
        listItems.forEach(item => {
            item.addEventListener('click', () => {
                listItems.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
            })
        })
    }

    styles() {
        let style = document.createElement('style');
        style.innerHTML =`
        * {
            box-sizing: border-box;
            font-family: Helvetica, Arial, sans-serif;
            margin: 0;
        }
        
        .header__wrapper {
            background-color: #fff;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1;
        }

        .header__container {
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding: 10px 40px;
            max-width: 1350px;
            margin: auto;
        }

        .menu-mobile {
            display: none;
            cursor: pointer;
        }
        
        .nav__list {
            display: flex;
            list-style: none;
            gap: 15px;
        }
        
        .nav__list * {
            color: #626262;
            cursor: pointer;
        }
        
        .nav__list a {
            color: inherit;
            text-decoration: none;
            font-weight: inherit;
        }
        
        .nav__list :hover {
            color: #df5f74;
        }
        
        .active {
            color: #E51B3E;
            font-weight: bold;
        }

        @media screen and (max-width: 768px) {
            .menu-mobile { display: block; }
            .nav { display: none; }
        }
        `;

        return style;
    }
}


customElements.define('header-component', HeaderComponent);