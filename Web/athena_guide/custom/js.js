﻿﻿//var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//window.onload = window_change();

window.onload = function() {re_size();monitor();};
window.onresize = function() {re_size();monitor();};

function re_size() {
	if(Number(window.innerWidth) <= 815) {
		$("#wrap").width("815px");
		$("#main").width("568px");
	} else {
		$("#wrap").width(window.innerWidth - 20 + "px");
		$("#main").width(($("#wrap").innerWidth() - (31*2) - 185) + "px");
	}
	//aside outer width is 185px
	//main section outer width is 625px
	//main section width is 563px
	//main section margin + border + padding is 62px

	if(Number(window.innerHeight) <= 510) {
		$("#main").height("314px");
	} else {
		$("#main").height((Number(window.innerHeight) - 196) + "px");
	}
	//body header height is 42px
	//body footer height is 57px
	//body section outer height is 77px
}

function load_data(){
	//if is there iframe element more than one,  refresh iframe content.
}

function monitor() {
	$(".ad").first().text(window.innerWidth + " X " + window.innerHeight);
}