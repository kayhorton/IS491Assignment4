 function MenuChoice() {
    if (document.getElementById("menu").value == "Show Area 1") {
        
        document.getElementById("area1").style.visibility = "visible";
        document.getElementById("area2").style.visibility = "hidden";
    }
    else  if (document.getElementById("menu").value == "Show Area 2"){
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "visible";
    }
    else {
    document.getElementById("area1").style.visibility = "hidden";
    document.getElementById("area2").style.visibility = "hidden";
    }
}