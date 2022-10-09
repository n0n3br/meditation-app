import "./styles.css";

function app() {
  const playButton = document.querySelector("#play-button");
  const video = document.querySelector("#video");
  const timeDisplay = document.querySelector("#time-display");
  let duration = 120;
  playButton.addEventListener("click", function () {
    if (video.paused) {
      this.querySelector("span").className = "mdi mdi-pause";
      video.play();
      return;
    }
    this.querySelector("span").className = "mdi mdi-play";
    video.pause();
  });

  const soundControlButtons = document.querySelectorAll(
    "#sound-controls button"
  );
  soundControlButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (video.src === this.dataset.video) return;
      video.src = this.dataset.video;
    });
  });
  video.addEventListener("timeupdate", function () {
    const position = Math.floor(this.currentTime);
    const seconds = (duration - position) % 60;
    const minutes = Math.floor((duration - position) / 60);
    timeDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  });
}

app();
