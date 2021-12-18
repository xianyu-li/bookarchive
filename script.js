$(document).ready(function() {
  $(".book-icon").hover(function () { 
    let bookCover = $(this).children()[0];
    $(bookCover).show();

  }, function () {
    let bookCover = $(this).children()[0];
    $(bookCover).hide();
  });

  $(".book-archive").click(function () {
    $(".infoblock").hide();
    $(".about").show();
  });

  $(".books").click(function (e) {
    let target = $( e.target );

    if(target.is( "img" )){
      let bookInfoId = $(target).attr("id") + "Info";

      $(".about").hide();

      $(".infoblock").hide();
      $("#" + bookInfoId).show();
    } else {
      $(".infoblock").hide();
      $(".about").show();
    }
  });
});