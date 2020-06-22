$(document).ready(function() {
    $('#arcTable').dataTable({
        "pagingType": "full_numbers",

        //overflow X scroll
        "scrollX": true,

        //searchbar
        searching: false,

        //default order state
        "order": [],

        //ordering not applied to col
        "columnDefs": [
            { "orderable": false, "targets": [1,3,4,8,9] }
          ],
          scrollY:'100vh',
          scrollCollapse: true,

          //number of tr in tbody
          "lengthChange": false,
          lengthMenu:[8],

          //remove showing status
          "info":     false
    });
    
    $('input[name="daterange"]').daterangepicker({
    opens: 'right'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });



} );
// $('#dateArc').daterangepicker({
//     "startDate": "06/16/2020",
//     "endDate": "06/22/2020"
// }, function(start, end, label) {
//   console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
// });