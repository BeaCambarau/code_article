

$(document).ready(function() {

  if(true){
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
      //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
      css3: true
    });
  }


  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(window).on("resize", function(event){
    setupContents();
  })
  function setupContents(){
    $(".fp-tableCell > .content ").each(function(index, element){
      var content = $(this);
      //content.hide();
      var parent = content.parent();
      var height = parent.height()-$("#header").height()-$("#footer").height()-570;
      content.height(height);
      content.find("img").each(function(index,element){
        $(this).css({
          "height": content.height(),
          "width": "auto"
        })
        if($(this).width() > content.width()){
          $(this).css({
            "width": content.width(),
            "height": "auto"
          })
        }
      })
    //console.log(parent.height())
    })
  }
 setupContents();

});
