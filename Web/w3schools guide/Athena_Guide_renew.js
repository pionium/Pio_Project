window.onload = init();

function init() {
	var mainDatabaseDiv = document.getElementById("mainDatabase");
	mainDatabaseDiv.style.width = screen.availWidth - (screen.availWidth * 0.04) + "px";
	mainDatabaseDiv.style.height = screen.availHeight - (screen.availHeight * 0.3) + "px";
	mainDatabaseDiv.style.margin = screen.availWidth * (0.04/2) + "px";
	
	var firstRow = document.getElementsByClassName("row1");
	for(var i in firstRow){
		if(firstRow[i].tagName == "DIV")
			firstRow[i].parentNode.style.height = "60px";
	}
}

var chooseOption = document.getElementById("sortWay");
var databaseSec = document.getElementById("database");

function sortChoose() {
	databaseSec.style.display = "inline";
	switch(chooseOption.value) {
		case "syst":
			
			break;
		case "step":
			
			break;			
		case "installWay":
			
			break;			
		case "custom":
			
			break;
		default:
			databaseSec.style.display = "none";
			break;
	}
}

function asideHover() {

}