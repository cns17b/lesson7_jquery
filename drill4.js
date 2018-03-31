/*
Program Name: Recipe Display Application

Author: Cole Sheridan

Date:   March 31, 2018

Filename: drill4.js

*/

/* global $ */

//Displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
        
}//end of display

//Attach a listener to the h3 elements to invoke the display function when clicked.
$("h3").click(display);

//Displays and animates the next element after the current target
function display2(event){
    
    $(event.currentTarget).next().animate({height: 'toggle'}, "slow");
    
} //end of display2

//Attach a listener to the h3 elements to invoke the display function when clicked.
$("h3").click(display2);