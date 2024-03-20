window.onload = function () {
  var historyElement = document.getElementById("timeline_point");
  if (historyElement) {
    var animationDuration = 10000; // Duration set to 10 seconds (10000 milliseconds)
    // Set the initial position
    historyElement.style.transform =
      "rotate(90deg) translate3d(-22986px, -100vh, 0)";
    historyElement.style.transition = "transform 0s"; // Disable transition for initial position

    // Wait for the next frame to apply the second transform
    requestAnimationFrame(function () {
      // Apply the final position with transition
      historyElement.style.transition = "transform " + animationDuration + "ms";
      historyElement.style.transform =
        "rotate(90deg) translate3d(0px, -100vh, 0)";
    });
  }
};
