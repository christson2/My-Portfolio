//Pick the accordioncontainers from the DOM with querySelectorAll() and store it in a variable ('accordionItems')
// pick the accordion contents by ClassName()
//add eventlistener to the entire document ('DOMContentLoaded' event)
//callback function for the document.addEventListener:
  //inside the callback function, use forEach() method (that is, 'accordionContainer.forEach()') to add event listener('click event) to each item of the accordion container (in the html). 
    //callback function for the event listener fuction inside the forEach():
      //inside the event listener function, (toggle the active class in the css for accordion contents - (this.class.toggle('active))
      // Hide or show accordion content with conditional statement using if...else, and set the display to 'none' when the display is in block, else, (that is, if content disply value is not 'block') display should be set to block.

// avaScript
      const accordionItem = document.querySelectorAll('.accordion-item');
      // const accordionContent = document.getElementsByClassName('.accordion-content');

document.addEventListener('DOMContentLoaded', function () {  

  accordionItem.forEach(item => {
    item.addEventListener('click', function () {
      // close all accordion items
      accordionItem.forEach(accordionItem => {
        if (accordionItem != item) {
          accordionItem.classList.remove('active');
          accordionItem.querySelector('.accordion-content').style.disply = 'none';
         
        }
      });
      // toggle active class for the clicked accordion container
      this.classList.toggle('active');           

    });
  })

})