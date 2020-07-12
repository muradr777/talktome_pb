function showAnswer(array, i = 0) {
    loc_state.animationRunning = true;
    
    let answer = document.getElementById('answer');
    answer.innerHTML = array[i];
    setTimeout(() => {
        answer.parentNode.classList.add('shown');
        setTimeout(() => {
            hideAnswer();
            setTimeout(() => {
                if(i < array.length-1)
                    showAnswer(array, ++i);
                else {
                    loc_state.animationRunning = false;
                    pullFormBack(mindForm.parentNode);
                }
            }, 2000);
        }, 4000);
    }, 2000);

    return;
}

function hideAnswer() {
    document.getElementById('answer').parentNode.classList.remove('shown');
} 