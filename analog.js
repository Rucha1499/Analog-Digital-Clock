// Analog clock
const analogClock = document.querySelector(".analog-clock");
const clockNumbers = document.querySelector(".clock-number");

const secondHand=document.querySelector("#sec");  
const minHand=document.querySelector("#min");  
const hourHand=document.querySelector("#hr");  

setInterval(clockRotation, 1000);  

function clockRotation() {  
        
    const date=new Date();  
    const getSeconds=date.getSeconds()/60;  
    const getMinutes=date.getMinutes()/60;  
    const getHours=date.getHours()/12; 

    secondHand.style.transform="rotate("+getSeconds*360 + "deg)";  
    minHand.style.transform="rotate("+getMinutes*360 + "deg)";  
    hourHand.style.transform="rotate("+getHours*360 + "deg)"; 
} 

//Styling
analogClock.style = "width:300px; height: 300px; margin: 40px; border: 3px solid black; border-radius: 50%; position: relative; background:#E8F6EF;"