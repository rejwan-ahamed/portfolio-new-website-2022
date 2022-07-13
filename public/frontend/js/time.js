function showTime2() {
    var today = new Date();
    document.getElementById("your-clock").innerHTML =  today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    
       
      
}
setInterval(showTime2, 1000);

function showTime() {
    var d = new Date();
    
    document.getElementById("my-clock").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' });
 
}
setInterval(showTime, 1000);



// d.toLocaleString('en-US', { timeZone: 'America/New_York' });

// document.getElementById("clock").innerHTML = d.toLocaleTimeString();