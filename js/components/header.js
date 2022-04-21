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
                <a href="./index.html"><img src="./assets/img/logo-dh.png" alt="Logo"></a>
                <img class="menu-mobile" src="./assets/img/menu.png" alt="menu">
                <nav class="nav">
                <ul class="nav__list">
                    <li class="active"><a href="./index.html#">Home</a></li>
                    <li><a href="index.html#filmes">Itens</a></li>
                    <li><a href="#footer">Sobre Nós</a></li>
                    <li><a href="#" data-login>Login</a></li>
                </ul>
                </nav>
            </div>
        `;

        return div;
    }

    login() {
        console.log('Aooba')
        let login = document.querySelector('.backdrop');
        login.classList.remove('displayNone');
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
        let menuBurger = this.shadowRoot.querySelector('.menu-mobile');
        menuBurger.addEventListener('click', () =>{
            document.body.scrollTop = 0;   
            document.documentElement.scrollTop = 0;
            let menuContent = document.querySelector('.menu-content');
            menuContent.classList.remove('hidden');
        })
        let closeButton = document.querySelector('.close');
        if(!!closeButton) closeButton.addEventListener('click', () =>{
            let menuContent = document.querySelector('.menu-content');
            menuContent.classList.add('hidden');
        })
        let listMenu = document.querySelectorAll('.menu-content li');
        listMenu.forEach(item => {
            item.addEventListener('click', () => {
            
            let menuContent = document.querySelector('.menu-content');
            menuContent.classList.add('hidden');
        })})
        let loginButton = this.shadowRoot.querySelector('[data-login]');
        loginButton.addEventListener('click', () => {
            let body = document.querySelector('body');
            body.classList.add('overflow');
            this.login();
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
            width: 100vw;
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