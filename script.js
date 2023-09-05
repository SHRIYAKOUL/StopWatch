// Initializing variables.
var hour=0;
var min=0;
var sec=0;
var count=0;
// Initializing timer(start timer) variable and set it to false.
var timer=false
// Start function
// Executes when start button is clicked
function start(){
    if(timer==false){
        timer=true;
        // Call stopwatch function
        stopwatch();
    }
}
// Stop function
// Executes when stop button is clicked
function stop(){
     if(timer==true){
        timer=false;
    }
}
// Reset function
// Executes when reset button is clicked
function reset(){
    timer=false;
    hour=0;
    min=0;
    sec=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    
}
// stopwatch function 
function stopwatch(){
    if(timer==true){
        sec=sec+1;
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hour=hour+1;
            min=0;
            sec=0;
        }
        var hourStr=hour;
        var minStr=min;
        var secStr=sec;
       
        if(hour<10){
            hourStr="0"+hourStr;
        }
        if(min<10){
            minStr="0"+minStr;
        }
        if(sec<10){
            secStr="0"+secStr;
        }
        
        document.getElementById('hr').innerHTML=hourStr;
        document.getElementById('min').innerHTML=minStr;
        document.getElementById('sec').innerHTML=secStr;
        setTimeout("stopwatch()",1000);
    }
}
