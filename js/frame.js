$(document).ready(function(){
	
});

function loadData(string) {
	var xhttp = new XHttpRequest();
	xhttp.onreadystatechange = function() {
		var xmlDOC = xhttp.responseXML;
		for (node in xmlDOC.getElementsByTagName("cards").childNodes) {
			var n = document.createElement("div");
			n.style.backgroundColor = "#ffffff";
			n.style.width = "80px";
			n.style.height = "290px";
			n.style.display = "inline-block";
			n.style.position = "relative";
			
			
		}

	};
	xhttp.open("GET","data/"+string, true);
	xhttp.send();
}