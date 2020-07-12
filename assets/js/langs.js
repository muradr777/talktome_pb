document.querySelectorAll('.langs-btn').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        setLang(e.target.dataset.getLang);
        getJsonQuotes();
        getJsonLangs(e.target.dataset.getLang);
        document.querySelector('.langs-wrap').style.opacity = 0;
        setTimeout(() => {
            let langsReady = changeSiteLangs();
            setTimeout(() => {
                if(!langsReady)
                    changeSiteLangs();
                document.querySelector('.lang-overlay').style.opacity = 0;
                setTimeout(() => {
                    document.querySelector('.lang-overlay').parentNode.removeChild(document.querySelector('.lang-overlay'));
                }, 1000);
            }, 1000);
        }, 500);
        
    })
});

function getLang() {
    return loc_state.lang;
}
function setLang(val) {
    loc_state.lang = val;
    return true;
}

function changeSiteLangs() {
    if(loc_state.langs == undefined)
        return false;   
    document.querySelectorAll('.lang-text').forEach(el => {
        el.innerHTML = loc_state.langs[el.dataset.lang];
    });
}

function getJsonLangs(lang = 'en') {
    let file = loc_state.data_src + 'site_langs.json';
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            loc_state.langs = JSON.parse(this.responseText)[lang];
        }
    }
    xhr.send(null);
};