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
        <section id="red">
        <h1 id="h1">David</h1>
        <image><img id="perfil" src="./src/components/Images/perfil.jpg"></image>
        <image><img src="./src/components/Images/iconosbusqueda.png" id="icon1"></image>
        <image><img src="./src/components/Images/iconosmaleta.png" id="icon2"></image>
        <image><img src="./src/components/Images/iconosprivacidad.png" id="icon3"></image>
        
        </section>
        `;
    }
}

customElements.define("my-header", Header);

export default Header;