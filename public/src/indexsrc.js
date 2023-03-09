import * as components from "./components/indexcomponents.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <my-header></my-header>
        <my-menu></my-menu>
        <my-profile></my-profile>
        `;
      }
}

customElements.define("app-container", AppContainer);