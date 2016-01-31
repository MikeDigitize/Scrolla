import { getPosition } from "./get-position";
import { windowScroll } from "./scrollTo";

export function Scrolla(scrollAmount = 20) {

    function getScrollAmount(_scrollAmount, yStart, yStop) {
        return yStop > yStart ? -Math.abs(_scrollAmount) : +Math.abs(_scrollAmount);
    }

    return function scrolling(selector, updateScrollAmount = scrollAmount) {
        let yStop = getPosition(selector).top;
        let yStart = window.pageYOffset;
        scrollAmount = getScrollAmount(updateScrollAmount, yStart, yStop);
        windowScroll({ yStart, yStop, scrollAmount });
    };

}