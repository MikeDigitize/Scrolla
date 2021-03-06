## Scrolla
Scrolla is a Promise based utility tool that scrolls to where you tell it to on the page. Scrolla-sequence is Scrolla but with an additional generator based scroll sequencer.

### Compatibility
IE9+.

### Setup
Include it as a script

```html
<script src="js/Scrolla.js"></script>
<!-- or -->
<script src="js/Scrolla-sequence.js"></script>

```

or require / import it.

```javascript
// ES2016
import { Scrolla } from "js/Scrolla.js";

// Node / CommonJs
var Scrolla = require("js/Scrolla-sequence.js");

```

### Usage
Scrolla is a function you can call to scroll to somewhere on the page. Where on the page depends on what you pass in. You can either pass as a first argument:

* A CSS selector or HTMLElement. Scrolla will scroll to its top and left positional properties.
* An object with an x and / or y property to scroll to.

As a second argument you can pass in the speed at which the scroll occurs. This is an optional argument and defaults to 10. A number between 1 and 20 is recommended, with 1 being super slow and 20 being super fast.

```javascript
document.addEventListener("click", function(evt) {
  Scrolla(evt.target);  // scroll to the click target
});

// with a slow scroll speed 
Scrolla("#targetEl", 2);

// scroll to specific x and y properties
Scrolla({ x : 1000, y : 600 }); // include x or y or both

// with a fast scroll speed 
Scrolla({ y : 30 }, 15);

```

### Promise based
Scrolla returns a promise for each X and Y window animation, accessible through the <code>scrollY</code> and <code>scrollX</code> properties. If Scrolla is called again before an in progress scroll animation has ended, there's an internal mechanism which will cancel any of the promises not yet resolved.

```javascript
Scrolla("#targetEl").scrollY.then(function() {
  // do something when the Y scroll animation ends
});

// to react to both x and y animation ends use Promise.all
let scroll = Scrolla("#targetEl");
Promise.all([scroll.scrollX, scroll.scrollY]).then(function() {
  // do something when both x and y scroll animations end
});

```

### Sequencer

Scrolla sequence is Scrolla but with the ability to sequence scroll animations together. The sequence method is a static property on the Scrolla function and accepts an array of targets to scroll to, either as selectors, HTMLElements or objects with x and y properties as mentioned above, and additionally a function that returns a scroll target. Plus it takes an optional second argument, like Scrolla, to set the scroll speed.

```javascript
// pass in scroll targets in a variety of ways
var sequence = Scrolla.sequence([
  ".container",
  { x : 1000 },
  { y : 500, x : 0 },
  function() {
      var h1s = document.querySelectorAll("h1");
      var random = Math.floor(Math.random() * h1s.length);
      return h1s[random];
  }
], 5);

```
The sequence method is a generator that returns an iterator. The iterator returns an object after each use with a <code>value</code> property that holds an object with the <code>scrollX</code> and <code>scrollY</code> promises and a <code>done</code> property to indicate whether the sequence has finished. Calling next on the iterator will run the next animation. The iterator accepts an argument (false) to cancel the sequence.

```javascript
// from the above
sequence.next();  // runs the next scroll animation
sequence.next(false);  // cancel the sequence

```

The below is a simple example showing how to run an automatic sequence of scroll animations (using the scroll targets declared above) using setTimeout to create a gap between each.

```javascript
function run() {
    // trigger next scroll animation
    let scroll = sequence.next();
    
    // done will be false until all animations have completed
    if(!scroll.done) {
        Promise.all([scroll.value.scrollY, scroll.value.scrollX])
            .then(function() {
                setTimeout(function() {
                    run();
                }, 800);
          });
    }
    else {
        console.log("all animations completed");
    }
}

```

The caveat is that the Scrolla-sequence script is considerably larger than the standard Scrolla file, as it needs the polyfill for ES6 generators.

### Licence

MIT
