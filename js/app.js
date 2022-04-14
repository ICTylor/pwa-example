document.addEventListener("DOMContentLoaded", function () {
    let body = document.querySelector("body");
    let canvas = document.createElement("canvas");
    body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World!", 10, 50);
});