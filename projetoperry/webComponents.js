const headerTemplate = document.createElement("template");
headerTemplate.innerHTML =`
<style>
    @import url("system.css");
    :host {
        flex: 1;
        max-height: 128px;
        background-color: var(--color-primary);
    }

    header{
        display:flex;
        align-items: center;
    }

    h1{
        color:var
    }
</style>

<header>

<h1>TODOs</h1>
<p>Task name </p>

<div class="icon">
<svg width="100%" height="100%"  viewBox="0 0 24.342 24.342">
<path d="m9.5578 24.342h-9.5578v-14.193l12.171-10.149 12.171 10.149v14.193h-9.5578v-7.5914h-5.226z" />
</svg>
</div>
</header>
` ;

class TodoHeader extends HTMLElement{


    static observedAttribute  = ['state'];
    shadowRoot;
    constructor(){
        super();
        this.shadowRoot = this.attachShadow({mode: 'closed'});
        this.shadowRoot.append(headerTemplate.content.cloneNode(true));
    }
}

customElements.define("todo-header", TodoHeader);