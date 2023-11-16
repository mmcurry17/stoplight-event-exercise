const stopBtn = document.getElementById("stopButton");
const slowBtn = document.getElementById("slowButton");
const goBtn = document.getElementById("goButton");

const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

stopBtn.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
});

slowBtn.addEventListener("click", () => {
  slowLight.classList.toggle("slow");
});

goBtn.addEventListener("click", () => {
  goLight.classList.toggle("go");
});
