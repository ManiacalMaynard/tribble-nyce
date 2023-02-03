console.log('I am not a teapot!')
// old habit, ignore the above

// so let's make a color ratation script for the body background! The background image is set to 'multiply' so as the bg color rotates through hue values around the color wheel the image will subtly animate, whee!

let hue = 186; // establish the starting hue 

const doit = () => {
  hue < 360 ? hue++ : hue = 0 ; 
  // basically sets the range of available hues from 0 to 360
  document.body.style.backgroundColor = "hsl("+ hue + ",13%,45%)" 
  // sets the bgcolor of body to the current hue number
}

setInterval(doit, 200)
// and here we set the automation
// finally can I add that I LOVE HSL color! So much more intuitive than rgb or, cthulhu forbit, hex.