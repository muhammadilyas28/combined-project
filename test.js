$("#slider").roundSlider({
    sliderType: "min-range",
    radius: 50,
    value: 40,
    min: "30",
    max: 90,
    width: 6,
    handleSize: "+15",
    lineCap: "round",
    circleShape: "pie",
    startAngle: 270,
});
// console.log("tiuye");

let parent_rotate=document.getElementById('parent_rotate')

// parent_rotate.style.transform='rotate(45deg)'
 


// parent_rotate.style.backgroundColor='#d1d5db'

// let slider=document.getElementById('slider')

// let plus=document.getElementById('plus')

// let minus=document.getElementById('minus')

// plus.addEventListener('click', (event)=>{
//     console.log("PLUS CLICKED");
//     console.log(event);
// })
// minus.addEventListener('click', (event)=>{
//     console.log("MINUS CLICKED");
//     console.log(event);
//     // slider.
// })

// ---------------------

$("#minus").click(function() {
    let currentValue = $("#slider").roundSlider("option", "value");
    let newValue = currentValue - 10;
    $("#slider").roundSlider("option", "value", newValue);
});

$("#plus").click(function() {
    let currentValue = $("#slider").roundSlider("option", "value");
    let newValue = currentValue + 10;
    $("#slider").roundSlider("option", "value", newValue);
});