class Buttons extends HTMLElement {
    static get observedAttributes(){
        return["back", "reject", "super", "like", "thunder"]
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

    renedr(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/buttons/indexbuttons.css">
        <section>
            <image>${this.back}</image>
            <image>${this.reject}</image>
            <image>${this.super}</image>
            <image>${this.like}</image>
            <image>${this.thunder}</image>
        </section>
        `
    }
}

customElements.define("my-card", Buttons);
export default Buttons;