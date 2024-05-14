
        $(document).ready(function() {
            $("#slider").roundSlider({
                sliderType: "min-range",
    radius: 100,
    value: 90,
    min: "30",
    max: 90,
    width: 10,
    handleSize: "+15",
    lineCap: "round",
    circleShape: "pie",
    startAngle: 270,
            });

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
        });