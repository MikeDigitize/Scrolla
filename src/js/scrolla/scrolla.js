import { getElementPosition, getWindowPosition } from "./get-position";
import { getScrollAmount, scrolltoX, scrolltoY } from "./scroll-amount";
import { windowScroll } from "./window-scroll";

export function Scrolla(selector, scrollAmount = 10) {

    function scroll(elX, elY) {

        let { winX, winY } = getWindowPosition();
        let scrollAmountX = getScrollAmount(winX, elX, scrollAmount);
        let scrollAmountY = getScrollAmount(winY, elY, scrollAmount);

        return {
            scrollX : windowScroll(winX, elX, scrollAmountX, scrolltoX),
            scrollY : windowScroll(winY, elY, scrollAmountY, scrolltoY)
        };

    }

    if(typeof selector !== "string" && !(selector instanceof HTMLElement)) {
        let { x, y } = selector;
        x = typeof x === "undefined" ? getWindowPosition().winX : x;
        y = typeof y === "undefined" ? getWindowPosition().winY : y;
        return scroll(x, y);
    }
    else {
        let { elX, elY } = getElementPosition(selector);
        return scroll(elX, elY);
    }

}