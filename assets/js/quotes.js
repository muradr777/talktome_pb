function getJsonQuotes() {
    let file = loc_state.data_src + 'data_' + getLang() + '.json';
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            loc_state.quotes = JSON.parse(this.responseText);
        }
    }
    xhr.send(null);
}

function getRandomQuote() {
    let data = loc_state.quotes;
    return data[getRandomInt(data.length)];
}