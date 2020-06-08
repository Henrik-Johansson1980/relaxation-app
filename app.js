const container = document.querySelector(".container");
const text = document.getElementById("text");
const startBtn = document.getElementById("start-time");
const stopBtn = document.getElementById("stop-time");
const toMilliSeconds = time => time * 1000;
const setBreathTime = totalTime => (totalTime / 5) * 2;
const setHoldTime = totalTime => totalTime / 5;
const pointerContainer = document.querySelector(".pointer-container");
let intervalID;

function breatheAnimation() {
	text.innerHTML = "Breathe In";
	container.className = "container grow";
	container.style.animation = `grow ${totalTime * 0.4}ms linear forwards`;
	setTimeout(() => {
		text.innerText = "Hold";
		setTimeout(() => {
			text.innerHTML = "Breathe Out";
			container.className = "container shrink";
			container.style.animation = `shrink ${totalTime * 0.4}ms linear forwards`;
		}, setHoldTime(totalTime));
	}, setBreathTime(totalTime));
}

const timeSubmitBtn = document;
startBtn.addEventListener("click", () => {
    const input = document.getElementById("totaltime").value;
    if(isNaN(input)) {
        alert('Please enter time in seconds');
        return;
    }
	startBtn.disabled = true;
	stopBtn.disabled = false;

	totalTime = toMilliSeconds(document.getElementById("totaltime").value);

	pointerContainer.style.animation = `rotate ${totalTime}ms linear forwards infinite`;

	breatheAnimation();

	intervalID = setInterval(breatheAnimation, totalTime);
});

stopBtn.addEventListener("click", () => {
	startBtn.disabled = true;
	stopBtn.disabled = false;
	if (intervalID) {
		clearInterval(intervalID);
	}
});
