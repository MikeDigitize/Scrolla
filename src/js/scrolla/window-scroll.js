import { Promise } from "es6-promise";

export function windowScroll(start, stop, amount, scroll) {

    return new Promise(function (resolve) {

        function scrollHere() {
            start -=amount;
            scroll(start);
        }

        let timer = setInterval(() => {
            if(positionCheck(start, stop, amount)) {
                clearInterval(timer);
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

    });

}

export function rafSupport() {
    return window.requestAnimationFrame;
}

export function promiseSupport() {
    return window.Promise ? window.Promise : Promise.Promise;
}

export function positionCheck(start, stop, amount) {
    return amount > 0 && start <= stop || amount < 0 && start >= stop;
}