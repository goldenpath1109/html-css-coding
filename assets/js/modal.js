$(document).ready(function () {
  $(".photo").click(function () {
    var $photo = $(this);
    var $modal = $photo.nextAll(".modal").first();
    var $img = $modal.find(".modal-content");
    var $caption = $modal.find(".caption");

    var photoSrc = $photo.attr("src");

    $modal.css("display", "block");
    $img.css("display", "block");
    $img.attr("src", photoSrc);
    $img.css("height", "auto");
    $img.css("width", "50%");
    $caption.css("display", "block");
  });

  $(".close").click(function () {
    var $modal = $(this).closest(".modal");
    $modal.css("display", "none");
  });
});
