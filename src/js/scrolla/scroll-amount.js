import { getWindowPosition } from "./get-position";

export function getScrollAmount(start, stop, scrollAmount) {
    return stop > start ? -Math.abs(scrollAmount) : +Math.abs(scrollAmount);
}

export function scrolltoX(start) {
    window.scrollTo(start, getWindowPosition().winY);
}

export function scrolltoY(start) {
    window.scrollTo(getWindowPosition().winX, start);
}