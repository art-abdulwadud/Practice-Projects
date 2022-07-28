const video = document.querySelector("#my-video");
const playBtnContainer = document.querySelector(".play-button-container");
const playBtn = document.querySelector(".fa-play");

playBtnContainer.addEventListener('click', () => {
    if (video.paused){
        playBtn.style.display = 'none';
        video.play();
    } else {
        playBtn.style.display = 'block';
        video.pause();
    }
})
