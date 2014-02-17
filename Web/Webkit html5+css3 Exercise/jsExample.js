window.onload = function() {
document.getElementById('logo').onclick = function() {
	alert('Clicked! ' + counters);
	counters++;
}
}

var counters = 1;