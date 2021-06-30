// Digital Clock
const digitalClock = document.querySelector(".digital-clock");

const getTime = () => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const displayTime = hours + " : " + minutes + " : " + seconds;

    digitalClock.innerText = `${displayTime}`

    setTimeout(getTime, 1000);
}

getTime();


// Styling
digitalClock.style = "display:flex; align-items:center; justify-content:center; font-family:'Times New Roman', Times, serif; margin:10px; padding:10px; background-color: #FFD8CC; border-radius:10px; height:50px; width:100px"
