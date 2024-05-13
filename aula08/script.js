class WordCounter extends HTMLElement{

    constructor(){
        super();
    }

    get numbWords() {
        return this.innerText.split(" ").length;

    }


    get innerText(){
        return this.querySelector("p").innerText;

    }

    set innerText(text){
        this.querySelector("p").innerText = text;
    }

    
    createElement = (tag, content) => {
        const elem = document.createElement(tag);
        this.appendChild(elem);
        elem.innerText=content;
        return elem;
    
        
    }
/* 
    createElement = (url) => {
        const audio = document.createElement("audio");
        this.appendChild(elem);
        elem.innerText=content;
    
        
    }
    
*/

}
customElements.define('word-counter', WordCounter);


window.onload = () => {
    const wordcounter = document.querySelector('word-counter');
    wordcounter.innerText = "Comekie meu puto!! Vamos Codar e partir cabeça!!";
    const button = wordcounter.createElement("button", "Click Here !!!!");

    const buttonStyle = {
        backgroundImage:"linear-gradient(to right, #fa709a 0%, #fee140 100%)", // Novo gradiente adicionado
        color: "Black",
        padding: "10px",
        borderRadius: "20px",
        border: "none",
        display: "flex",
        position: "relative", // Adicionado para usar o pseudo-elemento ::after
        transition: "padding 0.2s ease", // Adiciona transição para o efeito de padding
    };

    Object.assign(button.style, buttonStyle);

    // Adiciona efeito de hover
    button.addEventListener("mouseenter", () => {
        button.style.backgroundImage = "linear-gradient(to right, #fccb90 0%, #d57eeb 100%)"; // Novo gradiente adicionado
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundImage = "linear-gradient(to right, #fa709a 0%, #fee140 100%)"; // Gradiente original restaurado
    });

    // Adiciona efeito de after
    const afterStyle = {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        borderRadius: "20px",
        background: "rgba(0,0,0,0.2)", // Cor de fundo do efeito after
        zIndex: "-1", // Coloca o pseudo-elemento atrás do botão
        transition: "opacity 0.3s ease", // Efeito de transição de opacidade
        opacity: "0", // Inicialmente transparente
    };

    const after = document.createElement("div");
    Object.assign(after.style, afterStyle);
    button.appendChild(after);

    // Adiciona efeito de aumento de tamanho ao clicar no botão
    button.addEventListener("click", () => {
        button.style.padding = "15px"; // Aumenta o padding
        setTimeout(() => {
            button.style.padding = "10px"; // Retorna ao tamanho original após um pequeno intervalo
        }, 200); // Intervalo em milissegundos
    });

    console.log(wordcounter.numbWords);
}


/*
window.onload = () => {
    const wordcounter = document.querySelector('word-counter');
    wordcounter.innerText = "Comekie meu puto!! Vamos Codar e partir cabeça!!";
    const button = wordcounter.createElement("button", "Click Here !!!!")
    const backgroundColor = "grey";
    const textColor = "white";
    const padding = "10px";
    const border = "20px";
    const borderLine = "none";
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
    button.style.padding = padding;
    button.style.borderRadius= border;
    button.style.border= borderLine;
    console.log(wordcounter.numbWords);


}
*/