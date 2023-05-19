// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const clickA = (action) => {
    action.preventDefault();
    console.log(hrefLink.value);

} 
clickA();
hrefLink.addEventListener('click', clickA);