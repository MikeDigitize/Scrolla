import { Promise } from "es6-promise";

export function windowScroll(start, stop, amount, scroll) {

    return new Promise((resolve, reject) => {

        function scrollHere() {

            let scrollAmount = amount;
            if(scrollAmount < 0) {
                if(stop - start < Math.abs(scrollAmount)) {
                    scrollAmount = -(stop - start);
                }
            }
            else {
                if(start - stop < Math.abs(scrollAmount)) {
                    scrollAmount = start - stop;
                }
            }

            start -= scrollAmount;
            scroll(start);

        }

        var timer = setInterval(() => {
            if(positionCheck(start, stop, amount)) {
                clearInterval(timer);
                this.isScrolling = false;
                this.reject = function(){};
                resolve();
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

        this.reject = function() {
            reject();
            clearInterval(timer);
        }

    });

}

export function rafSupport() {
    return window.requestAnimationFrame;
}

export function positionCheck(start, stop, amount) {
    return amount > 0 && start <= stop || amount < 0 && start >= stop;
}