//var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onload = function() {
	alert($("#main").css("margin-left"));
	alert($("#main").css("padding-left"));
}

function basic_size() {
	$("#wrap").width("1280px");
	$("#main").width("1033px");
}

function re_size() {
	var main_section = $("#main");
	$("#warp").width(window.innerWidth - 20 + "px");
	main_section.width(($("#wrap").innerWidth() - (main_section.css("margin-left") + main_section.css("padding-left") + main_section.css("border-width"))*2 - $("#right_aside").outerWidth(true)) + "px");
}

window.onresize = function() {
	if(Number(window.innerWidth) < 1280)
		basic_size();
	else
		re_size();
}