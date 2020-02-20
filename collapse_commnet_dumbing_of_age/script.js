// ==UserScript==
// @name         Collapse Commnet Dumbing Of Age
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.dumbingofage.com/*
// @match        http://www.dumbingofage.com/*
// @grant        none
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(".comment-author.vcard").append("<cite class='collapse'>&mdash;</cite>");
    $(".comment-text p:first-child").each(function(i, ele){
        var commentText = $(ele).text();
        console.log(commentText);
        var collapedText = commentText.substring(0, 40) + "...";
        var node = document.createElement("p");                    // Create a <p> node
        $(node).attr('class', 'collapedText');                     // add class
        $(node).css('display', 'none');                            // hide it
        var textnode = document.createTextNode(collapedText);      // Create a text node
        node.appendChild(textnode);                                // Append the text to <p>
        $(ele).parent().append(node);                              // Append p
    })
    $(".collapse").click(function(){
        console.log('clicked');
        if (!$(this).hasClass('collapsed')) {
            $(this).toggleClass('collapsed');
            $(this).text("+");
            $(this).parent().siblings(".comment-text").children("p").css('display', 'none');
            $(this).parent().siblings(".comment-text").children(".collapedText").css('display', 'block');
            $(this).parent().parent().parent(".comment").find(".children").css('display', 'none');
        } else {
            $(this).toggleClass('collapsed');
            $(this).html("&mdash;");
            $(this).parent().siblings(".comment-text").children("p").css('display', 'block');
            $(this).parent().siblings(".comment-text").children(".collapedText").css('display', 'none');
            $(this).parent().parent().parent(".comment").find(".children").css('display', 'block');
        }
    });
})();