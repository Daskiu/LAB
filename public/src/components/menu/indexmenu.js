export {default as Matches} from "./matches/indexmatches.js"
export {default as Header} from "./header/indexheader.js"

class Menu extends HTMLElement{

    static get observedAttributes(){
        return["matches", "message"]
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
        <my-header></my-header>
        <section>
        <h1>Matches</h1>
        <h1>Mensajes</h1>
        </section>
        <section>
        <my-matches></my-matches>
        </section>
        `;
    }
}

customElements.define("my-menu", Menu);

export default Menu;