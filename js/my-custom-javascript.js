"use strict";

//
$(document).ready(function() {
    $('h1').click(function() {
        if ($(this).css('background-color') == 'rgb(255, 255, 0)') {
            $(this).css('background-color', 'transparent');
        } else {
            $(this).css('background-color', 'yellow');
        }
    });
});


// $(document).ready(function() {
//     $('p').dblclick(function() {
//         $(this).css('font-size', '18px');
//     });
// });
$(document).ready(function() {
    $('p').dblclick(function() {
        if ($(this).css('font-size') == '18px') {
            $(this).css('font-size', '');
        } else {
            $(this).css('font-size', '18px');
        }
    });
});

$(document).ready(function() {
    $('li').mouseenter(function() {
        $(this).css('color', 'red');
    });
    $('li').mouseleave(function() {
        $(this).css('color', 'black');
    });
});

