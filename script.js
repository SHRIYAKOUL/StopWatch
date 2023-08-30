var hour=0;
var min=0;
var sec=0;
var count=0;
var timer=false
function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    hour=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
    
}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }      
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
        var countStr=count;
        if(hour<10){
            hourStr="0"+hourStr;
        }
        if(min<10){
            minStr="0"+minStr;
        }
        if(sec<10){
            secStr="0"+secStr;
        }
        if(count<10){
            countStr="0"+countStr;
        }
        document.getElementById('hr').innerHTML=hourStr;
        document.getElementById('min').innerHTML=minStr;
        document.getElementById('sec').innerHTML=secStr;
        document.getElementById('count').innerHTML=countStr;
        setTimeout("stopwatch()",10);
    }
}