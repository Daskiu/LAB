class Card extends HTMLElement {
    static get observedAttributes(){
        return["name", "age", "distance"]
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
        <link rel="stylesheet" href="./src/components/profile/card/indexcard.css">
        <section> 
            <h1>${this.name}</h1> 
            <h3>${this.age}</h3>
            <p>${this.distance}</p>
        </section>
        `
    }
}

customElements.define("my-card", Card);
export default Card;