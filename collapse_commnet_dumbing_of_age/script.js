// ==UserScript==
// @name         Collapse Commnet Dumbing Of Age
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.dumbingofage.com/*
// @grant        none
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log('running')
    $(".comment-author.vcard").append("<cite class='collapse'>&mdash;</cite>")
    $(".collapse").click(function(){
        console.log('clicked')
        if (!$(this).hasClass('collapsed')) {
            $(this).toggleClass('collapsed')
            $(this).text("+")
            $(this).parent().parent().parent(".comment").find(".children").css('display', 'none')
        } else {
            $(this).toggleClass('collapsed')
            $(this).html("&mdash;")
            $(this).parent().parent().parent(".comment").find(".children").css('display', 'block')
        }
    });
})();