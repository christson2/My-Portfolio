const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const  color = document.querySelector('.color');

// add eventListener to btn
btn.addEventListener('click', colorDisplay)


// display function
function colorDisplay () {
    const randumNumber = getrandomNumber();
    console.log(randumNumber);
    document.body.style.backgroundColor = colors[randumNumber]
    color.textContent = colors[randumNumber]
}

// Get random numbers
function getrandomNumber () {
    // return Math.random() * colors.length;
    return Math.floor(Math.random() * colors.length);
}

// pseudo code
// get button element from the DOM
// get color display element from the DOM
// Add eventListener to the button
// When the button is clicked, the background cor of the body will change randomly
// also, the color name changes accordingly

// to achieve the background color change at random as well as the color name, 
// we make use of Math.floor(math.random) and multiply it by the length of the colors array.

// we then set the body background color to equal the colors array[randomNumber]
// The innerHTML of the color display element will also = the colors array (colors[randumNumber])