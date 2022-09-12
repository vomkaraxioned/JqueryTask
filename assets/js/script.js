/* Author: 

*/
let box = $(".box");
let colors = ["#ff0", "#0ff", "#f00", "#800", "#e06666", "#f6b26b", "#ff8c00"];
let index = 0;

function animation() {
    box.animate({ left: '90%' }, 6000);
    box.animate({ top: 0 }, 2000);
    box.animate({ left: 0 }, 6000);
    box.animate({ top: '100%' }, 2000, () => {
        animation();
    });
}

function changeColor() {
    if (index >= colors.length) {
        index = 0;
    }
    box.css({ "backgroundColor": colors[index] });
    index++;
}

box.click(() => {
    setInterval(changeColor, 500);
    animation();
});