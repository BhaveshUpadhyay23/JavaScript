let clock = document.querySelector("#clock");

const curTime = () =>{
    let time = new Date().toLocaleTimeString();
    clock.innerText = time;
};
setInterval(curTime,1000);
