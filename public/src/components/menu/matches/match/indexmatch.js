class Match extends HTMLElement{

    static get observedAttributes(){
        return["message", "picture"]
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
        <link rel="stylesheet" href="./src/components/menu/matches/match/indexmatch.css">
       
        <section id="jp">
        <h1 id="message">${this.message}</h1>
        <img id="pp" src="./src/components/Images/pp.jpg">

        </section>
       
        `;
    }
}

customElements.define("my-match", Match);

export default Match;