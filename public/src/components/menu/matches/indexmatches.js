export {default as Match} from "./match/indexmatch.js"

class Matches extends HTMLElement{

    static get observedAttributes(){
        return["match"]
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
        <link rel="stylesheet" href="./src/components/menu/matches/indexmatches.css">
        <my-match message="3 Me gusta"></my-match>
        `;
    }
}

customElements.define("my-matches", Matches);

export default Matches;