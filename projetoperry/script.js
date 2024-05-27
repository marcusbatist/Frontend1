window.onload = async () => {

    // O teu código aqui...
    const listsContainer = document.querySelector("#lists-container");
    document.querySelector('#tasks').onclick = () => {
        listsContainer.style.transform = "translateX(-100%)";

    }
    document.querySelector('#items').onclick = () => {
        listsContainer.style.transform = "translateX(0%)";
    }
}
