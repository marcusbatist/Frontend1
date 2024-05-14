

const template = document.createElement('template');
template.innerHTML = `
    <style>


        /*Elements*/

        *{
            font-family:system-ui,sans-serif;
        }

   

        button{
            display:flex;
            border:none;
            background-color:green;
            padding: 10px 20px;
            cursor:pointer;
            color:black;
         
            padding:15px;
            transition: 0.35s;
        }

        button:active{
            padding: 20px;
        }


        /*Classes*/

        .gallery{
            position:relative;
            display:flex;
            flex-direction:column;
            width:500px;
            height:500px;
            gap:20px;
        }

        /*Id's*/

        #images-container{
            display:flex;
            flex:1;
            background-color:red;
            border-radius: 10px;
        }

        #controls{
           display:flex;
           justify-content:space-between;
           background-color:blue;
       
        }

        #play-pause{
            position:absolute;
            top:10px;
            left:10px;
        }

        #Previous{

        }

        #Next{

        }

    </style>
        <div class="gallery">

        <div id="images-container"></div>
        <div id="controls">
            <button id="previous">Previous</button>
            <button id="next">Next</button>
        </div>

        <button id="play-pause">Stop</button>
    </div>
`;

const itemTemplate = document.createElement('template');
itemTemplate.innerHTML = `
<style>
       .item{
            width:100%;
            height:100%;
            background-image: url('https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bed9c10a58c67d5e458_g3aUbBRKfdR_6OG1TCTnUbr6646sydM67yBSoKQY1bK3gi4o6eUUkFqUrWc6Sg-ycGJ1zUn3SWhgSfh_A1-F10cvgmKPFM2cae0Vgt500TDqVezLt_-l6fQQYKHda_-kp-0OgW6A.png');
            background-position:center;
            background-size:cover;
       }

</style>

<div class="item"></div>

`;



class WebGallery extends HTMLElement{

    shadowRoot = null;
    constructor(){
        super();
        this.shadowRoot = this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        
    }

connectedCallback(){

    const imageContainer = this.shadowRoot.querySelector("#images-container");
    const item = itemTemplate.content.cloneNode(true);
    imageContainer.appendChild(item);

    this.shadowRoot.querySelector("#previous").onclick = () =>{
        console.log("previous clicked");
    }

    this.shadowRoot.querySelector("#next").onclick = () =>{
        console.log("Next clicked");
    }

    this.shadowRoot.querySelector("#play-pause").onclick = () =>{
        console.log("play pause clicked");
    }
       
}

}
customElements.define('web-gallery', WebGallery);