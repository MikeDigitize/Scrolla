export function getElementPosition(selector) {

    let element = getElement(selector);
    let elX = getPositionToWindow(element).left;
    let elY = getPositionToWindow(element).top;

    return { elX, elY };

}

export function getElement(element) {
    return element instanceof HTMLElement ? element : document.querySelector(element);
}

export function getPositionToWindow(element) {

    let pos = element.getBoundingClientRect();
    let winPos = getWindowPosition();
    let top = pos.top + winPos.winY;
    let left = pos.left + winPos.winX;

    return { top, left };

}

export function getWindowPosition() {

    let winX = window.scrollX || window.pageXOffset;
    let winY = window.scrollY || window.pageYOffset;

    return { winX, winY };

}