class Header extends HTMLElement{

    static get observedAttributes(){
        return["profile", "name", "icon1", "icon2", "icon3"]
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/menu/header/indexheader.css">
        <section>
        <image></image>
        <h1>David</h1>
        <image></image>
        <image></image>
        <image></image>
        </section>
        `;
    }
}

customElements.define("my-header", Header);

export default Header;