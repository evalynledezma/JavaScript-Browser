// How to Run JavaScript Scripts in the Browser Console

function fullName(first, last) {
    return `${first} ${last}`;
  }
  
  fullName('Kristine', 'Hudgens');
  
  
  newFullName = (first, last) => {
    return `${first} ${last}`;
  }
  
  newFullName('Kristine', 'Hudgens');


  // Comparison of Chrome's Command Line API vs Vanilla JavaScript
  // Source page: http://www.dailysmarty.com/

// Console with Command Line API / Firebug
$('.image-item')
$('.image-item').first // returns function
$('.image-item').first()
$('.image-item').first().hide()

// Compared with
document.getElementsByClassName('post-item-wrapper')[0].style.display = 'none';