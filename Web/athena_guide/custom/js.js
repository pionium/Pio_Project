//var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onresize = function() {
	if(Number(window.innerWidth) < 1280)
		$("#warp").width("1280px");
	else
		$("#warp").width(window.innerWidth-20 + "px");
} 