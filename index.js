let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let countdown = 10;

let intervalId = setInterval(function () {
  countdown -= 1;
  timerEl.textContent = countdown;
  if (countdown === 0) {
    timerEl.textContent = "Boommmmmmmmmmm...!";
    clearInterval(intervalId);
  }
}, 1000);

defuserEl.addEventListener("keydown", function (event) {
  let bombDefuserText = defuserEl.value;
  if (
    event.key === "Enter" &&
    bombDefuserText === "defuse" &&
    countdown !== 0
  ) {
    timerEl.textContent = "You did it!";
    clearInterval(intervalId);
  }
});
