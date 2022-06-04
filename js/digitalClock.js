function showTime(){
    var dateTime= new Date();
    // console.log(dateTime);

    var hrs= dateTime.getHours();

    var min= dateTime.getMinutes();

    var sec = dateTime.getSeconds();

    var session= document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML ='PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;

    document.getElementById('minute').innerHTML = min;

    document.getElementById('second').innerHTML = sec
}

setInterval(showTime,1000);