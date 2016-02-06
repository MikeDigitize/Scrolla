import { getElementPosition, getWindowPosition } from "./get-position";
import { getScrollAmount, scrolltoX, scrolltoY } from "./scroll-amount";
import { windowScroll } from "./window-scroll";

export function Scrolla(selector, scrollAmount = 10) {

    let { winX, winY } = getWindowPosition();
    let { elX, elY } = getElementPosition(selector);
    let scrollAmountX = getScrollAmount(winX, elX, scrollAmount);
    let scrollAmountY = getScrollAmount(winY, elY, scrollAmount);

    return {
        scrollX : windowScroll(winX, elX, scrollAmountX, scrolltoX),
        scrollY : windowScroll(winY, elY, scrollAmountY, scrolltoY)
    };

}