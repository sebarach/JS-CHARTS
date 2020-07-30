window.onload = function () 
{


    //GRAFICO 1
    var chart = new CanvasJS.Chart("chartContainer", {

      title:{
        text: "Grafico de Barras"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "column",
         dataPoints: [
         { label: "banana", y: 18 },
         { label: "orange", y: 29 },
         { label: "apple", y: 40 },                                    
         { label: "mango", y: 34 },
         { label: "grape", y: 24 },
         { label: "grape2", y: 84 }
         ]
       }
       ]
     });
    chart.render();



    //Grafico 2
    var chart2 = new CanvasJS.Chart("chartContainer2", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Grafico de Torta"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 51.08, label: "Chrome" },
                { y: 27.34, label: "Internet Explorer" },
                { y: 10.62, label: "Firefox" },
                { y: 5.02, label: "Microsoft Edge" },
                { y: 4.07, label: "Safari" },
                { y: 1.22, label: "Opera" },
                { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart2.render();


    //Grafico 3
    var chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        title: {
            text: "Grafico de Trazabilidad"
        },
        axisX: {
            title: "Time"
        },
        axisY: {
            title: "Percentage",
            suffix: "%",
            includeZero: true
        },
        data: [{
            type: "line",
            name: "CPU Utilization",
            connectNullData: true,
            //nullDataLineDashType: "solid",
            xValueType: "dateTime",
            xValueFormatString: "DD MMM hh:mm TT",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: 1501048673000, y: 35.939 },
                { x: 1501052273000, y: 40.896 },
                { x: 1501055873000, y: 56.625 },
                { x: 1501059473000, y: 26.003 },
                { x: 1501063073000, y: 20.376 },
                { x: 1501066673000, y: 19.774 },
                { x: 1501070273000, y: 23.508 },
                { x: 1501073873000, y: 18.577 },
                { x: 1501077473000, y: 15.918 },
                { x: 1501081073000, y: null },
                { x: 1501084673000, y: 10.314 },
                { x: 1501088273000, y: 10.574 },
                { x: 1501091873000, y: 14.422 },
                { x: 1501095473000, y: 18.576 },
                { x: 1501099073000, y: 22.342 },
                { x: 1501102673000, y: 22.836 },
                { x: 1501106273000, y: 23.220 },
                { x: 1501109873000, y: 23.594 },
                { x: 1501113473000, y: 24.596 },
                { x: 1501117073000, y: 31.947 },
                { x: 1501120673000, y: 31.142 }
            ]
        }]
    });
    chart3.render();



    //Grafico 4
    var chart4 = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        title:{
            text: "Grafico de Precios-Ganancias"
        },
        axisX:{
            valueFormatString: "MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Precio en Peso Chileno",
            valueFormatString: "$##000.0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "MMM",
            yValueFormatString: "$##000.0",
            dataPoints: [
                { x: new Date(2020, 01, 00), y: 2000000 },
                { x: new Date(2020, 01, 01), y: 3000000 },
                { x: new Date(2020, 03, 02), y: 5000000 },
                { x: new Date(2020, 04, 03), y: 8000000 },
                { x: new Date(2020, 05, 04), y: 4000000 },
                { x: new Date(2020, 06, 05), y: 1000000 },
                { x: new Date(2020, 07, 06), y: 7000000 },
                { x: new Date(2020, 07, 07), y: 4000000 },
                { x: new Date(2020, 07, 08), y: 9000000 },
                { x: new Date(2020, 07, 09), y: 2000000 },
                { x: new Date(2020, 07, 10), y: 000000 }
            ]
        }]
    });
    chart4.render();


//Grafico 5

var chart5 = new CanvasJS.Chart("chartContainer5", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	animationEnabled: true,
	title:{
		text: "Grafico de Precios-Ganancias 2"   
	},
	axisX: {
		interval: 1,
		intervalType: "month",
		valueFormatString: "MMM"
	},
	axisY:{
		title: "Price (in USD)",
		valueFormatString: "$#0"
	},
	data: [{        
		type: "line",
		markerSize: 12,
		xValueFormatString: "MMM, YYYY",
		yValueFormatString: "$###.#",
		dataPoints: [        
			{ x: new Date(2016, 00, 1), y: 61, indexLabel: "Ganancia", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2016, 01, 1), y: 71, indexLabel: "Ganancia", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2016, 02, 1) , y: 55, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 03, 1) , y: 50, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 04, 1) , y: 65, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 05, 1) , y: 85, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 06, 1) , y: 68, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 07, 1) , y: 28, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 08, 1) , y: 34, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 09, 1) , y: 24, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 10, 1) , y: 44, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 11, 1) , y: 34, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" }
		]
	}]
});
chart5.render();


  }