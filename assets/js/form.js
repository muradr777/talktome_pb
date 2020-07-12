let mindForm = document.getElementById('mindForm');

function alertExeption (message){
    let alert = document.getElementById('alert');
    alert.innerHTML = message;
    alert.classList.add('shown');
    setTimeout(() => {
        alert.classList.remove('shown');
    }, 3000);
};

function pushFormDown(elem) { 
    if(!loc_state.animationRunning) elem.classList.add('changePosition') 
}

function pullFormBack(elem) {
    if(!loc_state.animationRunning)  
        elem.classList.remove('changePosition')
}

function inputEmpty() {
    document.getElementById('message').value.length == 0;
}

mindForm.addEventListener('input', () => {
    if(inputEmpty()) {
        pullFormBack(mindForm.parentNode)    
        hideAnswer();
    }
    if(loc_state.playing && !loc_state.mute)
        document.getElementById('volDown').classList.add('shown');
    
});

mindForm.addEventListener('input', () => {
    if(!loc_state.typing) {
        loc_state.typing = true;
        
        if(!loc_state.mute) {
            playVideoSmoothly();
            loc_state.playing = true;
        }
    }
});


mindForm.addEventListener('submit', e => {
    e.preventDefault();
    
    let langs = loc_state.langs;
    
    
    if(loc_state.animationRunning) {
        alertExeption(langs['dont_rush']);
        return;
    }

    if(inputEmpty()) {
        alertExeption(langs['empty_message']);
        return;
    }
    
    pushFormDown(mindForm.parentNode);
    showAnswer(getRandomQuote());
    
});