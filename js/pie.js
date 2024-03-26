var ctx = document.getElementById("myChart").getContext("2d");
var data = [
    {
        value: 50,
        color:"#1F7D2A",
        highlight: "#37FA4E",
        label: "Schools connected"
    },
    {
        value: 50,
        color: "#E61010",
        highlight: "#FF5A5E",
        label: "Schools not connected"
    }

]
var options= [ {scaleBackdropPaddingX: 2, animateScale: true, animationSteps : 50, animationEasing : "easeOutBounce"}];
var myPieChart = new Chart(ctx).Pie(data, options);


