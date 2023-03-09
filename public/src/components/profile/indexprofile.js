export {default as Buttons} from "./buttons/indexbuttons.js"
export {default as Card} from "./card/indexcard.js"

class Profile extends HTMLElement {
    static get observedAttributes(){
        return["photo"]
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
        <link rel="stylesheet" href="./src/components/profile/indexprofile.css">
        <image><img src="./src/components/Images/pp.png"> </image>
        <my-card name="Danna" age="20" distance="A 8 kilómetros de distancia"></my-card>
        <my-buttons></my-buttons></my-buttons>
        `
    }
}

customElements.define("my-profile", Profile);
export default Profile;