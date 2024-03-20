$(document).ready(function () {
  $(".photo_sp").click(function () {
    var $photo = $(this);
    var $modal = $photo.nextAll(".modal_sp").first();
    var $img = $modal.find(".modal_content_sp");
    var $caption = $modal.find(".caption_sp");

    var photoSrc = $photo.attr("src");

    $modal.css("display", "block");
    $img.css("display", "block");
    $img.attr("src", photoSrc);
    $img.css("height", "auto");
    $img.css("width", "76%");
    $caption.css("display", "block");
  });

  $(".close_sp").click(function () {
    var $modal = $(this).closest(".modal_sp");
    $modal.css("display", "none");
  });
});
