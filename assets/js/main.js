"use strict";

const loc_state = {
    'lang': 'en',
    'mute': false,
    'typing': false,
    'soundOn': false,
    'animationRunning': false,
    'quotes': [],
    'langs': {},
    'data_src': 'assets/js/data/'
};

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max)); 
}