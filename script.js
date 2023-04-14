function bmi(){
    var a = document.getElementById("he").value;
    var b = document.getElementById("we").value;
	if (a!="" && b!="" && a<=250 && b<=600){
            var c = a/100;
	    var bmi = b/c**2
	    document.getElementById("display").innerHTML=bmi.toFixed(2);
	}
   	else if (a=="" || b==""){
            alert("Kindly fill all the fields");
        }
        else{
            alert("Kindly Enter Appropriate Data");
       }		 
}
