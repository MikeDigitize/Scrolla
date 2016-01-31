export function createTestElement(width = "200px", height = "200px") {
    var el = document.createElement("div");
    el.style.position = "absolute";
    el.style.width = width;
    el.style.height = height;
    return el;
}

export function insertElement(el, top = "0px", left = "0px", parent = document.body) {
    el.style.top = top;
    el.style.left = left;
    parent.appendChild(el);
}

export function removeElement(el) {
    el.parentNode.removeChild(el);
}