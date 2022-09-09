/* Author: 

*/
let box = $(".box");

function animation () {
    box.animate({ left:'90%'}, 2000, ()=> {
        box.css( "background-color", "#ff0");
    });
    box.animate({ left:'45%'}, 2000, ()=> {
        box.css( "background-color", "#0ff" );
    });
    box.animate({ left: 0 }, 2000, ()=> {
        box.css("background-color", "#f00");
    });
    box.animate({ left: '45%' }, 2000, ()=> {
        box.css( "background-color", "#0ff" );
    });
    box.animate({ top:0 }, 2000, ()=> {
        box.css("background-color", "#f0f");
    });
    box.animate({ top:'40%' }, 2000, ()=> {
        box.css("background-color", "#0ff");
    });
    box.animate({top:'100%'}, 2000, ()=> {
        box.css("background-color", "#800");
    });
    box.animate({top:'40%'}, 2000, ()=> {
        box.css("background-color", "#0ff");
        animation();
    });
}

box.click(()=>{
    animation();
});






















