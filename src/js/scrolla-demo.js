import { Scrolla } from "./scrolla/scrolla";
window.Scrolla = Scrolla;

document.addEventListener("click", function(evt) {
    let random = Math.floor(Math.random() * 20) + 1;
    Scrolla(evt.target, random);
});

