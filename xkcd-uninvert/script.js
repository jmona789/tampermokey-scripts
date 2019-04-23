// ==UserScript==
// @name         XKCD uninvert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://xkcd.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('body').append('<ul class="comicNav"><li><a id="uninvert">Uninvert Image</a></li></ul>');
    $('#uninvert').click(function(){
        if($('#comic img').hasClass("uninverted")){
            $('#comic img').removeClass("uninverted");
            $('#comic img').css('filter','invert(100%) hue-rotate(180deg)');
            $('#uninvert').text("Uninvert Image");
        } else {
            $('#comic img').addClass("uninverted");
            $('#comic img').css('filter','none');
            $('#uninvert').text("Reinvert Image");
        }
    });
    // Your code here...
})();