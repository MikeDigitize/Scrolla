document.addEventListener("click", function(evt) {

    let randomAmount = Math.floor(Math.random() * 10) + 1;
    let randomX = Math.floor(Math.random() * 1500) + 1;
    let randomY = Math.floor(Math.random() * 1500) + 1;
    let random = Math.random() > 0.5 ? 1 : 0;
    let config = { y : randomY, x : randomX };
    let scroll;

    if(random === 0) {
        console.log("scroll by config", random);
        scroll = Scrolla(config, randomAmount);
    }
    else {
        console.log("scroll by click target", random);
        scroll = Scrolla(evt.target, randomAmount);
    }

    scroll.scrollX.then(function() {
        console.log("done x", randomX);
    });
    scroll.scrollY.then(function() {
        console.log("done y", randomY);
    });

});