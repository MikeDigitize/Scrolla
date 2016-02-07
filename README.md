## Scrolla
Promise based utility tool that scrolls to where you tell it to on the page.

### Compatibility
IE9+.

### Setup
Include it as a script

```html
<script src="js/Scrolla.js"></script>

```

or require / import it.

```javascript
// ES2016
import { Scrolla } from "js/Scrolla";

// Node / CommonJs
var Scrolla = require("js/Scrolla");

```

### Usage
Scrolla is a function you can call to scroll to somewhere on the page. Where on the page depends on what you pass in. You can either pass as a first argument:

* A CSS selector or HTMLElement. Scrolla will scroll to its top and left CSS properties.
* An object with an x and / or y property to scroll to.

As a second argument you can pass in the speed at which the scroll occurs. This is an optional argument and defaults to 10. A number between 1 and 20 is recommended, with 1 being super slow and 20 being super fast.

```javascript
document.addEventListener("click", function(evt) {
  Scrolla(evt.target);  // scroll to the click target
});

// with a scroll speed 
Scrolla(evt.target, 1);

// scroll to specific x and y properties
Scrolla({ x : 1000, y : 600 }); // include x or y or both

// with a scroll speed 
Scrolla({ y : 30 }, 5);

```

### Promise based
Scrolla returns a promise for each X and Y window animation, accessible through the scrollY and scrollX properties.

```javascript
Scrolla(document.querySelector("#targetEl")).scrollY.then(function() {
  // do something when the Y scroll animation ends
});

// to react to both x and y animation ends
let scroll = Scrolla(document.querySelector("#targetEl"));
scroll.scrollX.then(function() {
  // do something when the X scroll animation ends
});
scroll.scrollY.then(function() {
  // do something when the Y scroll animation ends
});

```

That's all there is to it.

### Licence

MIT
