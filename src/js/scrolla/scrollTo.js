export function windowScroll(data) {
    function scrollHere() {
        yStart -=scrollAmount;
        window.scrollTo(0, yStart);
    }
    let { yStart, yStop, scrollAmount } = data;
    let timer = setInterval(() => {
        if(scrollAmount > 0 && yStart <= yStop || scrollAmount < 0 && yStart >= yStop) {
            clearInterval(timer);
        }
        else {
            scrollHere(yStart, scrollAmount, yStop);
        }
    }, 5);
}

