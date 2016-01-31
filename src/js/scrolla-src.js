import { Scrolla } from "./scrolla/scrolla";
window.scroll = Scrolla(5);

document.addEventListener("click", function(evt) {
    scroll(evt.target);
});

