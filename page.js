// Map chart
anychart.onDocumentReady(function() {
    let chart = anychart.heatMap(getData());
    chart.title("BMKG Weather Predictions in East Jakarta from March 19 to March 23 2024");
    chart.container("container");
    chart.draw();
})

// BMKG data
function getData() {
    return [
        {
            x: "Tuesday",
            y: "Early morning (07:00 WIB)",
            heat: 26
        },
        {
            x: "Tuesday",
            y: "Morning (10:00 WIB)",
            heat: 31
        },
        {
            x: "Tuesday",
            y: "Daylight (13:00 WIB)",
            heat: 31
        },
        {
            x: "Tuesday",
            y: "Afternoon (16:00 WIB)",
            heat: 30
        },
        {
            x: "Tuesday",
            y: "Night (19:00 WIB)",
            heat: 26
        },
        {
            x: "Tuesday",
            y: "Midnight (22:00 WIB)",
            heat: 25
        },
        {
            x: "Wednesday",
            y: "Early morning (07:00 WIB)",
            heat: 24
        },
        {
            x: "Wednesday",
            y: "Morning (10:00 WIB)",
            heat: 31
        },
        {
            x: "Wednesday",
            y: "Daylight (13:00 WIB)",
            heat: 32
        },
        {
            x: "Wednesday",
            y: "Afternoon (16:00 WIB)",
            heat: 30
        },
        {
            x: "Wednesday",
            y: "Night (19:00 WIB)",
            heat: 28
        },
        {
            x: "Wednesday",
            y: "Midnight (22:00 WIB)",
            heat: 25
        },
        {
            x: "Thursday",
            y: "Early morning (07:00 WIB)",
            heat: 25
        },
        {
            x: "Thursday",
            y: "Morning (10:00 WIB)",
            heat: 29
        },
        {
            x: "Thursday",
            y: "Daylight (13:00 WIB)",
            heat: 30
        },
        {
            x: "Thursday",
            y: "Afternoon (16:00 WIB)",
            heat: 29
        },
        {
            x: "Thursday",
            y: "Night (19:00 WIB)",
            heat: 26
        },
        {
            x: "Thursday",
            y: "Midnight (22:00 WIB)",
            heat: 25
        },
        {
            x: "Friday",
            y: "Early morning (07:00 WIB)",
            heat: 24
        },
        {
            x: "Friday",
            y: "Morning (10:00 WIB)",
            heat: 28
        },
        {
            x: "Friday",
            y: "Daylight (13:00 WIB)",
            heat: 30
        },
        {
            x: "Friday",
            y: "Afternoon (16:00 WIB)",
            heat: 29
        },
        {
            x: "Friday",
            y: "Night (19:00 WIB)",
            heat: 26
        },
        {
            x: "Friday",
            y: "Midnight (22:00 WIB)",
            heat: 25
        },
        {
            x: "Saturday",
            y: "Early morning (07:00 WIB)",
            heat: 25
        },
        {
            x: "Saturday",
            y: "Morning (10:00 WIB)",
            heat: 28
        },
        {
            x: "Saturday",
            y: "Daylight (13:00 WIB)",
            heat: 31
        },
        {
            x: "Saturday",
            y: "Afternoon (16:00 WIB)",
            heat: 27
        },
        {
            x: "Saturday",
            y: "Night (19:00 WIB)",
            heat: 26
        },
        {
            x: "Saturday",
            y: "Midnight (22:00 WIB)",
            heat: 24
        },
       
    ]
}