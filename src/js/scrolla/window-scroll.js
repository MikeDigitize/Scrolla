export function windowScroll(start, stop, amount, scroll) {
    function scrollHere() {
        start -=amount;
        scroll(start);
    }
    let timer = setInterval(() => {
        if(amount > 0 && start <= stop || amount < 0 && start >= stop) {
            clearInterval(timer);
        }
        else {
            if(rafSupport()) {
                requestAnimationFrame(scrollHere);
            }
            else {
                scrollHere();
            }
        }
    }, 5);
}

export function rafSupport() {
    return window.requestAnimationFrame;
}
