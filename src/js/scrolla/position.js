export function findPosition(el) {
    el =  el instanceof HTMLElement ? el : document.querySelector(el);
    let pos = el.getBoundingClientRect(),
        top = pos.top + (window.scrollY || window.pageYOffset),
        left = pos.left + (window.scrollX || window.pageXOffset);
    return { top, left };
}