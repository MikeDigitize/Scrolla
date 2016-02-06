import { getPosition } from "./get-position";
import { windowScroll } from "./window-scroll";

export function Scrolla(selector, scrollAmount = 10) {

    let { winX, winY } = getWindowPosition();
    let { elX, elY } = getElementPosition(selector);
    windowScroll(winX, elX, getScrollAmount(winX, elX, scrollAmount), scrollX);
    windowScroll(winY, elY, getScrollAmount(winY, elY, scrollAmount), scrollY);
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

export function scrollX(start) {
    window.scrollTo(start, getWindowPosition().winY);
}

export function scrollY(start) {
    window.scrollTo(getWindowPosition().winX, start);
}