
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 1450000;
let intervalID;
let mins = 0;
let secs = 0;
let numCycles = 0;

let breakTime = false;


startBtn.addEventListener("click",()=>{
    startTime = Date.now() - elapsedTime; 
    intervalId = setInterval(updateTime, 75);
});


resetBtn.addEventListener("click", ()=>{
  
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = `25:00`;
  
  
});

function updateTime(){ //main timer loop handles both worktime and breaktime

  if(breakTime==false){ //work time loop
    elapsedTime = Date.now() - startTime;
    secs = Math.floor(60-(elapsedTime / 1000)% 60);
    mins = Math.floor(25-(elapsedTime / (1000 *60) )% 60);

    if(elapsedTime>=1500000){ //elapsedTime reached 25 min,take a break!
      breakTime = !breakTime;
      clearInterval(intervalId);
      startTime = 0;
      elapsedTime = 0;
      startTime = Date.now(); 
      intervalId = setInterval(updateTime, 75);
      document.getElementById("workStatus").innerHTML ="Break Time:";
    }
  }
  else{ //break time loop
    elapsedTime = Date.now() - startTime;
    secs = Math.floor(60-(elapsedTime / 1000)% 60);
    mins = Math.floor(5-(elapsedTime / (1000 *60) )% 60);

    if(elapsedTime>=300000){ //elapsedTime reached 5 minutes, revert to work time
      breakTime = !breakTime;
      clearInterval(intervalId);
      startTime = 0;
      elapsedTime = 0;
      startTime = Date.now(); 
      intervalId = setInterval(updateTime, 75);
      document.getElementById("workStatus").innerHTML ="Work Time:";
      numCycles+=1;
      document.getElementById("numCycles").innerHTML = `You've lasted ${numCycles} cycles`;
    }
  }


  if(secs<10){ //handle the padding of seconds
    secs = "0"+secs;
  }
  if(mins<10){ //handle the padding of minutes
    mins = "0"+mins;
  }
  timeDisplay.textContent = `${mins}:${secs}`;
  

}