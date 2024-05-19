$("#slider_01").roundSlider({
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
console.log("tiuye");

let parent_rotate=document.getElementById('parent_rotate')
parent_rotate.style.transform='rotate(45deg)'
parent_rotate.style.position='relative'
 
// ---------------------

$("#minus").click(function() {
    let currentValue = $("#slider_01").roundSlider("option", "value");
    let newValue = currentValue - 5;
    $("#slider_01").roundSlider("option", "value", newValue);
});

$("#plus").click(function() {
    let currentValue = $("#slider_01").roundSlider("option", "value");
    let newValue = currentValue + 5;
    $("#slider_01").roundSlider("option", "value", newValue);
});