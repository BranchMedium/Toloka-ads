
let numSlides // myslides array index number
let answer // class name value
let numSl // division
let stopIt // stop sliding
let dont // stop doing the sliding
let mainObject = document.getElementById("you");
// class values stored in an array
let myslides = [
    "A1.png", "A2.png", "A3.png", "A4.png", "A5.png", "A6.png", "A7.png", "A8.png", "A9.png", "A10.png", "A11.png", "A12.png"
]
// this function gives random value to select any key
numSl = 0;
function numberingSlides() {  
    numSlides = numSl;
    
    if(numSl == myslides.length){
        --numSl
    }
    return numSlides;  
}

//this create the slides 
function slideIt() {
    numberingSlides();
    answer = myslides[numSlides];
    numSl++;
    mainObject.src = answer.toString();
}

//this function set the background picture to slide one another
function action() {
    dont = setInterval(slideIt, 2000);
    return dont
}
// this stops the setinterval by calling the clearInterval
function stop() {
    return clearInterval(dont);
}
