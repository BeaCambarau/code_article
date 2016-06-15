

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    css3: true
  });

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

});
