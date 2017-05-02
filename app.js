function myJsFunction(){
    var monthly=document.getElementById('monthly');
    var rate=document.getElementById('rate');
    var totalDebt=document.getElementById('totalDebt');
    var rateMonthly = rate.value/12/100;
    var oneMinus = 1-rateMonthly*totalDebt.value/monthly.value;
    var timeLeftTop = -1*Math.log10(oneMinus);
    var timeLeftBottom =Math.log10(1+rateMonthly);
    var timeFinal = Math.ceil(timeLeftTop/timeLeftBottom);
    if (isNaN(timeFinal)) {
    	document.getElementById('timeFinals').innerHTML="The values you have entered cannot be computed please try again";
    }
    else{
    	document.getElementById('timeFinals').innerHTML= timeFinal + " months (" + Math.round(timeFinal/12)+" years) left until debt is fully paid off";
    }
    
 }