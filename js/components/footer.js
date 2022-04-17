class FooterComponent extends HTMLElement {

    members = [
        {nome: 'Erik Dornellas', funcao: 'Página home', linkedin: '#', github: 'https://github.com/ErikSD2'},
        {nome: 'Gabriel Henrique', funcao: 'Componentização', linkedin: '#', github: 'https://github.com/pouthergust'},
        {nome: 'Mahiny Andrade', funcao: 'Estilização', linkedin: 'https://www.linkedin.com/in/mahiny/', github: 'https://github.com/mahiny'},
        {nome: 'Wagner Morais', funcao: 'Página de video', linkedin: 'https://www.linkedin.com/in/wagner-morais-araujo-646375118', github: 'https://github.com/wagner2700'},
    ];

    constructor() {
        super();
        this.shadow = this.build()
    }

    build() {
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.styles());
        shadow.appendChild(this.component())
        this.memberComponent()
        return shadow
    }

    component() {
        let div = document.createElement('div');
        div.setAttribute('class', 'footer__container');

        div.innerHTML = `
        <div class="members__wrapper"></div>
        <p class="footer__note">&copy; Checkpoint 2 desenvolvido em 2022</p>
        `;

        return div
    }

    memberComponent() {

        let membersWrapper = this.shadowRoot.querySelector('.members__wrapper')   
        console.log(membersWrapper)
        this.members.forEach(member => {
            let div = document.createElement('div');
            div.setAttribute('class', 'members');

            let {nome, funcao, linkedin, github} = member;

            div.innerHTML = `
            <h2>${nome}</h2>
            <p>${funcao}</p>
            <div class="social-media">
                <a class="brand" href="${linkedin}"><i class="brand linkedin"></i></a>
                <a class="brand" href="${github}"><i class="brand github"></i></a>
            </div>
            `;

            membersWrapper.appendChild(div)
        })        
    }

    styles() {
        let style = document.createElement('style');
        style.innerHTML = `
            * {
                box-sizing: border-box;
            }       

            .footer__container {
                align-items: center;
                background: #171717;
                display: flex;
                flex-direction: column;
                margin-top: 80px;
                margin: 64px auto 0;
                padding: 48px 0;
            }
            
            .members__wrapper {
                display: grid;
                gap: 20px;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                max-width: 1350px;
                padding-bottom: 48px;
                padding-inline: 40px;
                width: 100%;
            }


            .members {
                background: #fff0;
                border-radius: 7px;
                cursor: initial;
                margin: auto;
                padding: 15px 20px;
                width: 100%;
            }

            .members:hover {
                background: #ffffff1f;
            }

            h2 {
                margin-top: 0;
                white-space: nowrap;
            }
            
            .footer__note {
                color: rgb(255, 255, 255, .5);
            }
            
            .social-media {
                display: flex;
                gap: 10px;
                justify-content: center;
            }
            
            .brand {
                background: var(--color-terceary);
                /* border-radius: 50%; */
                height: 24px;  
                text-align: center;
                width: 24px;
                display: block;
                filter: brightness(10) contrast(0) opacity(.5);
            }
            
            .linkedin {
                /* background: center / 110% url('https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png') #fff no-repeat; */
                background: center / contain url('https://cdn-icons-png.flaticon.com/512/174/174857.png') no-repeat;
            }
            
            .github {
                /* background: center / 110% url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1') #fff no-repeat; */
                background: center / contain url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1') no-repeat;
            }
        `
        return style;
    }
}

customElements.define('footer-component', FooterComponent);