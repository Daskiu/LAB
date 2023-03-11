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

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/buttons/indexbuttons.css">
        <section>
        <image> 
        <img src="./src/components/Images/back.png" id="b1">
        <img src="./src/components/Images/reject.png" id="b2">
        <img src="./src/components/Images/super.png" id="b3">
        <img src="./src/components/Images/like.png" id="b4">
        <img src="./src/components/Images/thunder.png" id="b5">
        </image>
        </section>
        `
    }
}

customElements.define("my-buttons", Buttons);
export default Buttons;