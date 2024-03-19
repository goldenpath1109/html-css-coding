$(document).keydown(function (e) {
	var historyDivElement = document.getElementById("history");
	console.log("historyDivElement: ", historyDivElement);
	var step = 30;
	switch (e.which) {
		case 37:
			historyDivElement.scrollTop -= step;
			console.log("left");
			break;

		case 38:
			console.log("top");
			break;

		case 39:
			historyDivElement.scrollTop += step;
			console.log("right");
			break;

		case 40:
			console.log("bottom");
			break;
	}
});
