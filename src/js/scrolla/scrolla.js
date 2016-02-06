import { getPosition } from "./get-position";
import { windowScroll } from "./window-scroll";

export function Scrolla(selector, scrollAmount = 10) {

    let { winX, winY } = getWindowPosition();
    let { elX, elY } = getElementPosition(selector);
    windowScroll(winX, elX, getScrollAmount(winX, elX, scrollAmount), scrolltoX);
    windowScroll(winY, elY, getScrollAmount(winY, elY, scrollAmount), scrolltoY);
    return { startX : winX, stopX : elX, startY : winY, stopY : elY };

}

export function getElementPosition(selector) {
    let elX = getPosition(selector).left;
    let elY = getPosition(selector).top;
    return { elX, elY }
}

export function getWindowPosition() {
    let winX = window.pageXOffset;
    let winY = window.pageYOffset;
    return { winX, winY };
}

export function getScrollAmount(start, stop, scrollAmount) {
    return stop > start ? -Math.abs(scrollAmount) : +Math.abs(scrollAmount);
}

export function scrolltoX(start) {
    window.scrollTo(start, getWindowPosition().winY);
}

export function scrolltoY(start) {
    window.scrollTo(getWindowPosition().winX, start);
}