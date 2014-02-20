var selectOp = document.getElementById("sort");
var sort_draw = document.getElementById("drawMain");
var phpdb = document.getElementsByClassName("db");
var dis = "inline";
	
function sortChoose() {
	if (selectOp.selectedIndex == 6 | selectOp.selectedIndex == 5) {
		for(var i = 0;i <= phpdb.length - 1; i++)
			{ phpdb[i].style.display == dis ? phpdb[i].style.display = "none" : phpdb[i].style.display = dis; }
	}
	whatUChoose();
}

function whatUChoose() {
	sort_draw.innerHTML = selectOp.options[selectOp.selectedIndex].text;
}