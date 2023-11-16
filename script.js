// Select the elements

let main = document.querySelector('.main');
let canvas = document.querySelector('.canvas');
let input = document.querySelector('.inputNumber');
let confirmBtn = document.querySelector('.confirm');
let gridNumber = 64;

// Calculate the width/height and make a nested loop to create the grid

let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;

let numberDivX = canvasWidth / gridNumber;

/* for (let x = 0; x < gridNumber; x++) {

    let newDiv = document.createElement('div');



}  */



