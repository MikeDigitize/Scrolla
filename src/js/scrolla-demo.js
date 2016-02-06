document.addEventListener("click", function(evt) {
    let random = Math.floor(Math.random() * 20) + 1;
    let scroll = Scrolla(evt.target);
    scroll.scrollX.then(function() {
        console.log("done x");
    });
    scroll.scrollY.then(function() {
        console.log("done y");
    });
});

