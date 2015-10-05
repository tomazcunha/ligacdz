
// $(function () {
//   $('#myTab a:last').tab('show');
// })

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


$(document).ready(function() {
  $('table').DataTable({
    "paging":   false,
    // "ordering": false,
    "info":     false,
    "order": [[ 4, "desc" ]],
    // "order": [[ 0, 'asc' ], [ 1, 'asc' ]],
    "columnDefs": [
      {
        "targets": [ 1 ],
        "visible": false,
        "searchable": false
      },
      // {
      //     "targets": [ 3 ],
      //     "visible": false
      // }
    ]

  } );
} );
