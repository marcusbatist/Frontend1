//assim fazes import de um ficheiro
import TestA from "./TestA.js"
import TestB from "./TestB.js"

window.onload = () => {
 /*  const a = new TestA()
    const b = new TestB()

        let arr = [];

    arr[0] = "dd";
    arr[1] = 11;

    let arrSpecial = new Float64Array();
    arrSpecial = 12;

    console.log(typeof(arrSpecial));

*/

let div = document.querySelector(".a");



let button = document.querySelector("button");
button.onclick = ()=> {
    div.style.backgroundColor = "yellow";
    div.style.backgroundImage = "url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSN3X7gFZun83XsXDxXuOU5cRY54U_jSoSfbz9OXUQpcEB-gC7H)"
    div.style.minWidth = "500px";
    div.textContent="Isto é a cor vermelha";



        div.classList.toggle("clickable")

       /* div.style.position="absolute";
        div.style.width = "100%";
        div.style.height  = "100%";
*/
      
    
/*
    div.onmouseover = () => {
        div.style.position="initial";
        div.style.width = "initial";
        div.style.height  = "initial";
    
 
       
     }
}
//let divA = document.querySelector(".a");
//console.log(divA[1]);

*/
}
}

