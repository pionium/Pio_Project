var sortOp = document.getElementById("sort");
var sort_draw = document.getElementById("drawMain");
	
function sortChoose() {
	if (sortOp.selectedIndex == 0) {
		sort_draw.innerHTML = "";
	} else {
		//alert(sortOp.options[sortOp.selectedIndex].value);
		//sort_draw.innerHTML = sortOp.options[sortOp.selectedIndex].text;
		dataReq(sortOp.selectedIndex);
	}
}

function dataReq(sOption) {
	
}