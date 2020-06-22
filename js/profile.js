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
} );