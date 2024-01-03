const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add eventListener to the btn
btn.addEventListener('click', colorDisplay);

// create the color  display function to display color at random
// the hTML body's background color will change at random when the btn is clicked
// the color display element's inner text will be the color hex code of the background color
// 1. create a function to get roundom numbers
// 2. make the body's background color equal the random colors from the array. "colors"
// 3. Create a variable for the hex symbol '#', and concatenate it with each of the random colors to be generated from the array.
// 4. Make the inner HTML of the 'color' equal to the random colors[] index from the array.
// 

function colorDisplay () {    
    let hexColor = '#';
    // create a for loop; to generate 6 numbers at random to be concatenated with the '#', so it will produce a certain color
    for (let i = 0; i < 6; i ++) {  
        hexColor += hex[getrandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;

    
}


// create function for to get random numbers
function getrandomNumber () {   
    return Math.floor(Math.random() * hex.length);
}