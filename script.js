// Select the elements

let main = document.querySelector('.main');
let canvas = document.querySelector('.canvas');
let input = document.querySelector('.inputNumber');
let confirmBtn = document.querySelector('.confirm');
let gridNumber = 16;
let numberOfCells = gridNumber * gridNumber;

// Calculate the width/height

let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;

// Set the borderSize, and the w/h of each div (considering the grid number, canvas w/h and the border)

let borderSize = 1;

let widthDivX = (canvasWidth / gridNumber) - (borderSize * 2);
let heightDivY = (canvasHeight / gridNumber) - (borderSize * 2);

// Create the loop and add the newDiv as a child of canvas div

for (let x = 0; x < numberOfCells; x++) {

    let newDiv = document.createElement('div');
    newDiv.style.width = `${widthDivX}px`;
    newDiv.style.height = `${heightDivY}px`;
    newDiv.style.backgroundColor = 'red'
    newDiv.style.border = 'solid 1px'
    canvas.appendChild(newDiv);

} 




