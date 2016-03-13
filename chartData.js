var c = document.getElementById("myChart"); // get chart element
var ctx = c.getContext("2d");				// get 2d context

/* get data from all input */
var mon = document.getElementById('mon').value;
var tue = document.getElementById('tue').value;
var wed = document.getElementById('wed').value;
var thu = document.getElementById('thu').value;
var fri = document.getElementById('fri').value;
var sat = document.getElementById('sat').value;
var sun = document.getElementById('sun').value;

/* set all char data */
var data = {
		labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "My Third dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [mon, tue, wed, thu, fri, sat, sun]
            }
        ]
};

/* create chart, function from Chart.js*/
var myLineChart = new Chart(ctx).Line(data);       

/* function change chart data when input is change */
function updateChart(id){
    var number;
    var value;
    switch(id){
        case "mon":
            value = document.getElementById('mon').value;
            number = 0;
            break;
        case "tue": 
            value = document.getElementById('tue').value;
            number = 1; 
            break;
        case "wed":
            value = document.getElementById('wed').value;
            number = 2; 
            break;
        case "thu": 
            value = document.getElementById('thu').value;
            number = 3; 
            break;
        case "fri":
            value = document.getElementById('fri').value;
            number = 4; 
            break;
        case "sat":
            value = document.getElementById('sat').value;
            number = 5; 
            break;
        case "sun":
            value = document.getElementById('sun').value;
            number = 6; 
            break;
    }
    
    if(isNaN(value) || value=='')
        value=0;
    myLineChart.datasets[0].points[number].value = value;
    myLineChart.update();   /* function chart.js causing update data */
}


