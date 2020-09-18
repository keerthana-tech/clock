function timer(){
var date=new Date();

var hours=date.getHours();
var mins=date.getMinutes();
var secs=date.getSeconds();
if(hours<=0){
    hours="0"+hours;
}
if(mins<0){
    mins="0"+mins;
}
if(secs<0){
    secs="0"+secs;
}
if(hours>=12){
    secs=`${secs}  PM `;
}
else{
    secs=`${secs}  AM `;
}



document.getElementById('hours').innerHTML=hours+":";
document.getElementById('mins').innerHTML=mins+":";
document.getElementById('secs').innerHTML=secs;
}

setInterval(timer,1000);

