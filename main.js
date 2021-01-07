function start() {
	var x = document.getElementById("url").value;
	if ( document.getElementById("os").value == "Android") {
     document.getElementById("mainemulator").src = x ;
		document.getElementById("emulator").style.display = "block";
		document.title = "Android Viewer | Mobile Website Emulator";
	}else{
		 document.getElementById("mainemulatorios").src = x ;
		document.getElementById("emulatorios").style.display = "block";
		document.title = "iPhone Viewer | Mobile Website Emulator";
	}
	document.getElementById("showed").style.display = "none";
	document.getElementById("contact").style.display = "none";
}