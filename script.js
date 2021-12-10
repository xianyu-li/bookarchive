$(document).ready(function() {
  let max = 0;

  $(".top-left").click(function() {
    $(".infoblock").hide();
  });
  $(".book-icon").on({

    mouseover: function() {
      let id = $(this).attr("id");
      let cover_id = "#" + id + "Cover";

      // $(".infoblock").hide();

      max++;
      
      // special random values to make sure book covers stay in view
      // change the value that's multiplied by Math.random() to change the random position of the book covers
      let randomX = Math.floor(Math.random() * 20) + 50;
      let randomY = Math.floor(Math.random() * 40) + 5;

      // setting the position of the book cover
      $(cover_id).css("left", randomX.toString() + "%");
      $(cover_id).css("top", randomY.toString() + "%");

      // moving the book cover to the top and showing it
      $(cover_id).css("z-index", max);
      $(cover_id).show();
    },

    click: function() {
      let id = $(this).attr("id");
      let info_id = "#" + id + "Info";

      $(".infoblock").hide();
      $(info_id).show();
    }
  });
});
