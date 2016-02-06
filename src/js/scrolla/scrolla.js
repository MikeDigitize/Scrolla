import { getElementPosition } from "./get-position";
import { windowScroll } from "./window-scroll";

export function Scrolla(selector, scrollAmount = 10) {

    let { winX, winY } = getWindowPosition();
    let { elX, elY } = getElementPosition(selector);
    let scrollAmountX = getScrollAmount(winX, elX, scrollAmount);
    let scrollAmountY = getScrollAmount(winY, elY, scrollAmount);

    windowScroll(winX, elX, scrollAmountX, scrolltoX);
    windowScroll(winY, elY, scrollAmountY, scrolltoY);

    return { startX : winX, stopX : elX, startY : winY, stopY : elY };

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