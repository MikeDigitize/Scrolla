document.addEventListener("click", function(evt) {

    let randomAmount = Math.floor(Math.random() * 10) + 1;
    let randomX = Math.floor(Math.random() * 1500) + 1;
    let randomY = Math.floor(Math.random() * 1500) + 1;
    let random = Math.random() > 0.5 ? 1 : 0;
    let config = { y : randomY, x : randomX };
    let scroll;

    if(random === 0) {
        console.log("scroll by config", "x:", randomX, "y:", randomY);
        scroll = Scrolla(config, randomAmount);
    }
    else {
        console.log("scroll by click target", evt.target);
        scroll = Scrolla(evt.target, randomAmount);
    }

    scroll.scrollX.then(function() {
        console.log("finished x scroll");
    });
    scroll.scrollY.then(function() {
        console.log("finished y scroll");
    });

});

if(Scrolla.sequence) {

    var sequence = Scrolla.sequence([
        ".container",
        { x : 1000 },
        { y : 500, x : 0 },
        function() {
            var h1s = document.querySelectorAll("h1");
            var random = Math.floor(Math.random() * h1s.length);
            return h1s[random];
        }
    ]);

    window.run = function() {
        function allow() {
            if(x && y) {
                setTimeout(function() {
                    run();
                }, 800);
            }
        }
        let scroll = sequence.next();
        let { x, y } = false;
        if(!scroll.done) {
            scroll.value.scrollY.then(function() {
                console.log("Y finished");
                y = true;
                allow();
            });
            scroll.value.scrollX.then(function() {
                console.log("X finished");
                x = true;
                allow();
            });
        }
        else {
            console.log("done!!");
        }
    };

}