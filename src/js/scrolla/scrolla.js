import { getElementPosition, getWindowPosition } from "./get-utils";
import { getScrollAmount, scrolltoX, scrolltoY } from "./scroll-utils";
import { windowScroll } from "./window-scroll";

export function Scrolla(selector, scrollAmount = 10) {

    if(typeof selector === "undefined") {
        throw new Error("Scrolla expects either a CSS selector, a HTMLElement or an object with x or / and y co-ordinates");
    }

    function scroll(elX, elY) {

        if(Scrolla.xData.isScrolling || Scrolla.yData.isScrolling) {
            Scrolla.xData.reject();
            Scrolla.yData.reject();
        }

        let { winX, winY } = getWindowPosition();
        let scrollAmountX = getScrollAmount(winX, elX, scrollAmount);
        let scrollAmountY = getScrollAmount(winY, elY, scrollAmount);

        Scrolla.xData.isScrolling = Scrolla.yData.isScrolling = true;

        return {
            scrollX : windowScroll.call(Scrolla.xData, winX, elX, scrollAmountX, scrolltoX),
            scrollY : windowScroll.call(Scrolla.yData, winY, elY, scrollAmountY, scrolltoY)
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

Scrolla.xData = {
    isScrolling : false,
    reject : null
};

Scrolla.yData = {
    isScrolling : false,
    reject : null
};
