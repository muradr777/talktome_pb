let volUp = document.getElementById('volUp');
let volDown = document.getElementById('volDown');

volUp.addEventListener('click', () => {
    swapVolBtns(volDown, volUp);
    player.playVideo();
    loc_state.mute = false;
});

volDown.addEventListener('click', () => {
    swapVolBtns(volUp, volDown);
    player.stopVideo();
    loc_state.mute = true;
});

function swapVolBtns(show, hide) {
    show.classList.add('shown');
    hide.classList.remove('shown');
};

function playVideoSmoothly() {
    player.setVolume(0);
    player.playVideo();
    increaseVolumeSmoothly(1);
}

function increaseVolumeSmoothly(i) {
    player.setVolume(i);
    if(i < 80) {
        setTimeout(() => {
            increaseVolumeSmoothly(++i);
        }, 100);
    } else return ;
}