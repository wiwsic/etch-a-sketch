// Select the elements

let main = document.querySelector('.main');
let canvas = document.querySelector('.canvas');
let input = document.querySelector('.inputNumber');
let confirmBtn = document.querySelector('.newgrid');

// Calculate the width/height

let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;

// Create a function that generate grid

function generateGrid(grid, border) {

    // Remove all divs inside canvas div

    while (canvas.lastElementChild) {
        canvas.removeChild(canvas.lastElementChild);

    }

    // Set the borderSize, and the w/h of each div (considering the grid number, canvas w/h and the border)

        let gridNumber = grid;
        let numberOfCells = gridNumber * gridNumber;

        let borderSize = border;

        let widthDivX = (canvasWidth / gridNumber) - (borderSize * 2);
        let heightDivY = (canvasHeight / gridNumber) - (borderSize * 2);

        
        for (let x = 0; x < numberOfCells; x++) {

            let newDiv = document.createElement('div');
            newDiv.style.width = `${widthDivX}px`;
            newDiv.style.height = `${heightDivY}px`;
            newDiv.classList.add('grid');
            newDiv.style.backgroundColor = 'white';
            newDiv.style.border = 'solid 1px';
            canvas.appendChild(newDiv);
        
            // Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
            // leaving a (pixelated) trail through your grid like a pen would.
        
            newDiv.addEventListener('mouseover', (e) => {
            
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);    

                newDiv.style.backgroundColor = `rgb(${r},${g},${b})`;

                // Additionally, implement a progressive darkening effect where each interaction adds 
                // 10% more black or color to the square. The objective is to achieve a completely black 
                // square only after ten interactions.

                let rDecrement = r / 10;
                let gDecrement = g / 10;
                let bDecrement = b / 10;
            
                newDiv.addEventListener('click', (e) => {

                    r -= rDecrement;
                    g -= gDecrement;
                    b -= bDecrement;

                    newDiv.style.backgroundColor = `rgb(${r},${g},${b})`;


                })
            
            })
        
        } 


}

// Create the initial grid;

generateGrid(16,1);

// Add event handler to new grid button, if clicked, prompt user about canvas size and generate new grid
// with maximum value btw 1 and 100.
// The program persist to prompt until user give a valid answer

confirmBtn.addEventListener('click', () => {
    let gridN;

    do {
        gridN = parseInt(prompt('Number of squares per side for the new grid? (1 to 100)', ''));
    } while (isNaN(gridN) || gridN < 1 || gridN > 100);

    generateGrid(gridN,1);
});



