class FooterComponent extends HTMLElement {

    members = [
        {nome: 'Gabriel Henrique', funcao: 'Componentização', linkedin: '#', github: 'https://github.com/pouthergust'},
        {nome: 'Erik Dornellas', funcao: 'Página home', linkedin: '#', github: 'https://github.com/ErikSD2'},
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
        <p class="footer__note">Checkpoint 3 desenvolvido em 2022</p>
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
            .footer__container {
                background: #171717;
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                margin-top: 80px;
                padding: 10px 40px;
            }
            
            .members__wrapper {
                display: flex;
                gap: 20px;
                justify-content: space-between;
            }

            h2 {
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
                height: 30px;  
                text-align: center;
                width: 30px;
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