$(document).keydown(function (e) {
  var historyDivElement = document.getElementById("history");
  console.log("historyDivElement: ", historyDivElement);
  var step = 30;
  switch (e.which) {
    case 37:
      historyDivElement.scrollTop -= step;
      break;

    case 38:
      break;

    case 39:
      historyDivElement.scrollTop += step;
      break;

    case 40:
      break;
  }
});
