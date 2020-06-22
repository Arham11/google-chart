

$(document).ready(function () {

    //pr status data (can be fect from api too)
    let prStatusData = [['PR under Process', 25],['PR ready', 100],['Material Shipped', 90]];
    let bmPoStatusData = [['PO under Process', 50],['Material Ready to ship', 100],['Material Shipped', 75],['Material Delivered', 60]];
    let paymentData = [['Not Due', 75],['<30', 25],['30-60', 50],['60-90', 100],['>90', 30]];
    let inventoryData = [['In Transit', 55],['<30', 75],['30-60', 60],['60-90', 100],['>90', 30]];

    // Load Charts and the corechart package.
    google.charts.load('current', { packages: ['corechart', 'bar'] });

    // Draw the bar chart for PR Status.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that draws the bar chart
    function drawChart() {

        var dataPr = new google.visualization.DataTable();         //prstatus
        var dataBmPo = new google.visualization.DataTable();         //bmPoStatus
        var dataPay = new google.visualization.DataTable();         //payment
        var dataInv = new google.visualization.DataTable();         //inventory



        dataPr.addColumn('string', 'PR Status');
        dataPr.addColumn('number', 'INR value');

        dataBmPo.addColumn('string', 'BM PO Status');
        dataBmPo.addColumn('number', 'INR value');

        dataPay.addColumn('string', 'Payment Status');
        dataPay.addColumn('number', 'INR value');

        dataInv.addColumn('string', 'Inventory');
        dataInv.addColumn('number', 'INR value');

        // determine the number of rows and columns.
        var numRowsPr = prStatusData.length;
        var numRowsBmPo = bmPoStatusData.length;
        var numRowsPay = paymentData.length;
        var numRowsInv = inventoryData.length;

        // now add the rows.
        for (var i = 0; i < numRowsPr; i++){
            dataPr.addRow(prStatusData[i]);
        }
        for (var i = 0; i < numRowsBmPo; i++){
            dataBmPo.addRow(bmPoStatusData[i]);
        }
        for (var i = 0; i < numRowsPay; i++){
            dataPay.addRow(paymentData[i]);
        }
        for (var i = 0; i < numRowsInv; i++){
            dataInv.addRow(inventoryData[i]);
        }
        
        var optionsPr = {
            width: '100%',
            height: '700px',
            colors: ['#6EA8FF'],
            bar: { groupWidth: "45%" },
            vAxis: {
                title: 'INR value',
                gridlines: {
                    count: 8,
                    color: '#fafafa',
                }
            },
            hAxis: {
                textStyle:{color: '#8793A0'}
            },
            legend: { position: 'top', alignment: 'center' },
            displayAnnotations: true,
            annotations: {
                boxStyle: {
                  // Color of the box outline.
                  stroke: '#888',
                  // Thickness of the box outline.
                  strokeWidth: 1,
                  // x-radius of the corner curvature.
                  rx: 10,
                  // y-radius of the corner curvature.
                  ry: 10,
                  // Attributes for linear gradient fill.
                  gradient: {
                    // Start color for gradient.
                    color1: '#fbf6a7',
                    // Finish color for gradient.
                    color2: '#33b679',
                    // Where on the boundary to start and
                    // end the color1/color2 gradient,
                    // relative to the upper left corner
                    // of the boundary.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    // If true, the boundary for x1,
                    // y1, x2, and y2 is the box. If
                    // false, it's the entire chart.
                    useObjectBoundingBoxUnits: true
                  }
                }
              }
        };

        var optionsBmPo = {
            width: '100%',
            height: '700px',
            colors: ['#F87E5D'],
            bar: { groupWidth: "55%" },
            vAxis: {
                title: 'INR value',
                gridlines: {
                    count: 4,
                    color: '#fafafa',
                }
            },
            hAxis: {
                textStyle:{color: '#8793A0'}
            },
            legend: { position: 'top', alignment: 'center' }
        };

        var optionsPay = {
            width: '100%',
            height: '700px',
            colors: ['#5BE297'],
            bar: { groupWidth: "65%" },
            vAxis: {
                title: 'INR value',
                gridlines: {
                    count: 4,
                    color: '#fafafa',
                }
            },
            hAxis: {
                textStyle:{color: '#8793A0'}
            },
            legend: { position: 'top', alignment: 'center' }
        };
        var optionsInv = {
            width: '100%',
            height: '700px',
            colors: ['#FEB600'],
            bar: { groupWidth: "65%" },
            vAxis: {
                title: 'INR value',
                gridlines: {
                    count: 4,
                    color: '#fafafa',
                }
            },
            hAxis: {
                textStyle:{color: '#8793A0'}
            },
            legend: { position: 'top', alignment: 'center' }
        };

        var chartPr = new google.visualization.ColumnChart(document.getElementById('chartPr'));
        var chartBmPo = new google.visualization.ColumnChart(document.getElementById('chartBmPo'));
        var chartPay = new google.visualization.ColumnChart(document.getElementById('chartPay'));
        var chartInv = new google.visualization.ColumnChart(document.getElementById('chartInv'));

        // Instantiate and draw the chart
        chartPr.draw(dataPr, optionsPr);
        chartBmPo.draw(dataBmPo, optionsBmPo);
        chartPay.draw(dataPay, optionsPay);
        chartInv.draw(dataInv, optionsInv);
    }

})











// annotations: {
//     boxStyle: {
//       // Color of the box outline.
//       stroke: '#888',
//       // Thickness of the box outline.
//       strokeWidth: 1,
//       // x-radius of the corner curvature.
//       rx: 10,
//       // y-radius of the corner curvature.
//       ry: 10,
//       // Attributes for linear gradient fill.
//       gradient: {
//         // Start color for gradient.
//         color1: '#fbf6a7',
//         // Finish color for gradient.
//         color2: '#33b679',
//         // Where on the boundary to start and
//         // end the color1/color2 gradient,
//         // relative to the upper left corner
//         // of the boundary.
//         x1: '0%', y1: '0%',
//         x2: '100%', y2: '100%',
//         // If true, the boundary for x1,
//         // y1, x2, and y2 is the box. If
//         // false, it's the entire chart.
//         useObjectBoundingBoxUnits: true
//       }
//     }
//   }

