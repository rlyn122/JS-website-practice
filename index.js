
const timeContainer = document.getElementById("timeContainer");
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener("click",()=>{
  if (paused == true){
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});

pauseBtn.addEventListener("click",()=>{
  if(!paused){
  paused = true;
  elapsedTime = Date.now() - startTime;
  clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click",()=>{
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.textContent = `00:00:00`;

});

function updateTime(){
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000)% 60);
  mins = Math.floor((elapsedTime / (1000 *60) )% 60);
  hrs = Math.floor((elapsedTime / (1000 *60 *60) )% 60);

  if(secs<10){
    secs = "0"+secs;
  }
  if(mins<10){
    mins = "0"+mins;
  }
  if(hrs<10){
    hrs = "0"+hrs;
  }
  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}