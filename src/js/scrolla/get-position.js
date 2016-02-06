export function getElementPosition(selector) {

    let elX = getPosition(selector).left;
    let elY = getPosition(selector).top;

    return { elX, elY };

}

export function getPosition(el) {

    let element = getElement(el);
    let { top, left } = getPositionToWindow(el);

    return { top, left };

}

export function getElement(el) {
    return el instanceof HTMLElement ? el : document.querySelector(el);
}

export function getPositionToWindow(el) {

    let pos = el.getBoundingClientRect(),
        top = pos.top + (window.scrollY || window.pageYOffset),
        left = pos.left + (window.scrollX || window.pageXOffset);

    return { top, left };

}