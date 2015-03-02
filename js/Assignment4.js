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


function calcmeetings() {
    var inputDate = 0;
    var minterval = 0;
    var mnomeets = 0;
    inputDate = new Date(document.getElementById("mdate").value);
    minterval = Number(document.getElementById("interval").value);
    mnomeets =  Number(document.getElementById("nomeets").value);
    text01 = "<p>Meeting Schedue<br />Initial Meeting Date is " + inputDate + "</p>";
    
    
    //validatedate(inputDate);
    
    var count=0;
    var result= text01 + "<p>This is a list of " + mnomeets + " meetings which will occur every " + minterval + " days. </p><br /><table><tr><th>meeting #</th><th>meeting date</th></tr>";
    for (count=0; count < mnomeets; count++){
        var calcmdate=0;
        calcmdate= inputDate.toDateString(inputDate.setDate(inputDate.getDate()  + minterval));  //calculate next meeting
       result+= "<tr><td>" + (count+1) + "</td><td>" +  calcmdate + "</td></tr>"; 
    }
    result +="</table>";
    document.getElementById("displayresults").innerHTML = result;
    
    
}